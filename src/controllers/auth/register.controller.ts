import { createUser } from '#db/index.js'
import { RequestHandler } from 'express'
import bcrypt from 'bcrypt'
import { z } from 'zod'

const SALT_ROUNDS = Number(process.env.BCRYPT_ROUNDS) || 10
const schema = z.object({
  name: z.string('Name must be a string').min(2).max(50).trim(),
  email: z.email('Invalid email address').nonempty().toLowerCase().trim(),
  password: z.string('Password must be a string').min(8).max(100).trim()
})
export const registerHandler: RequestHandler = async (req, res, next) => {
  const cookie = req.cookies.token
  if (cookie) {
    return res.status(401).json({
      message: 'You are already logged in'
    })
  }

  try {
    let { name, email, password } = schema.parse(req.body)

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

    const user = await createUser({
      name,
      email,
      password: hashedPassword
    })

    if (!user) {
      return res.status(500).json({
        message: 'Failed to create user'
      })
    }

    return res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    })
  } catch (error: any) {
    // Prisma unique constraint
    if (error.code === 'P2002') {
      return res.status(409).json({
        message: 'Email already exists'
      })
    }

    return next(error)
  }
}
