import bcrypt from 'bcrypt'
import { RequestHandler } from 'express'
import { z } from 'zod'

import { createUser } from '../../db/index.js'

const SALT_ROUNDS = Number(process.env.BCRYPT_ROUNDS) || 10
const schema = z.object({
  email: z.email('Invalid email address').nonempty().toLowerCase().trim(),
  name: z.string('Name must be a string').min(2).max(50).trim(),
  password: z.string('Password must be a string').min(8).max(100).trim()
})
export const registerHandler: RequestHandler = async (req, res, next) => {
  const cookie = (req.cookies as undefined | { token?: string })?.token
  if (cookie) {
    return res.status(401).json({
      message: 'You are already logged in'
    })
  }

  try {
    const { email, name, password } = schema.parse(req.body)

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

    const user = await createUser({
      email,
      name,
      password: hashedPassword
    })

    return res.status(201).json({
      message: 'User registered successfully',
      user: {
        email: user.email,
        id: user.id,
        name: user.name
      }
    })
  } catch (error: unknown) {
    // Prisma unique constraint
    if (typeof error === 'object' && error !== null && 'code' in error && (error as { code?: string }).code === 'P2002') {
      return res.status(409).json({
        message: 'Email already exists'
      })
    }

    next(error)
    return
  }
}
