import { RequestHandler } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { findUserByEmail, storeSession } from '#db/index.js'

const JWT_SECRET = process.env.JWT_SECRET || 'LIFE IS BEAUTIFUL'

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not set. Using default secret. This is not recommended for production environments.')
}

export const loginHandler: RequestHandler = async (req, res) => {
  const { email, password } = req.body
  let user

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }
  try {
    user = await findUserByEmail(email)
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal server error' })
  }

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  // const session = await storeSession({ expires: new Date(Date.now() + 1000 * 60 * 60 * 24), userId: user.id })
  // res.cookie('session', session.userId, { httpOnly: true, expires: session.expires })

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' })
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  })
  res.status(200).json({ message: 'Login Successful' })
}
