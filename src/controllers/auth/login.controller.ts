import bcrypt from 'bcrypt'
import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'
import * as z from 'zod'

import { findUserByEmail } from '#db/index.js'

const JWT_SECRET = process.env.JWT_SECRET ?? 'LIFE IS BEAUTIFUL'

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not set. Using default secret. This is not recommended for production environments.')
}

const schema = z.object({ email: z.email(), password: z.string().min(8, 'Password must be at least 8 characters long').max(100) })

export const loginHandler: RequestHandler = async (req, res) => {
  const { email, password } = schema.parse(req.body)
  let user

  try {
    user = await findUserByEmail(email)
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.issues[0].message })
    }
    return res.status(500).json({ message: 'Internal server error' })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid password or email' })
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' })
  res.cookie('token', token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production'
  })
  res.status(200).json({ message: 'Login Successful' })
}
