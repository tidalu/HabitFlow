import { createUser } from '#db/index.js'
import { RequestHandler } from 'express'
import bcrypt from 'bcrypt'

const SALT_ROUNDS = Number(process.env.BCRYPT_ROUNDS) || 10

export const registerHandler: RequestHandler = async (req, res, next) => {
  try {
    let { name, email, password } = req.body

    // Basic validation
    if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      return res.status(400).json({
        message: 'Invalid request body',
      })
    }

    // Normalization
    name = name.trim()
    email = email.trim().toLowerCase()
    password = password.trim()

    // Empty checks after trimming
    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Name, email, and password are required',
      })
    }

    // Length validation
    if (name.length < 2 || name.length > 50) {
      return res.status(400).json({
        message: 'Name must be between 2 and 50 characters',
      })
    }

    if (password.length < 8 || password.length > 100) {
      return res.status(400).json({
        message: 'Password must be between 8 and 100 characters',
      })
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: 'Invalid email format',
      })
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

    const user = await createUser({
      name,
      email,
      password: hashedPassword,
    })

    if (!user) {
      return res.status(500).json({
        message: 'Failed to create user',
      })
    }

    return res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error: any) {
    // Prisma unique constraint
    if (error.code === 'P2002') {
      return res.status(409).json({
        message: 'Email already exists',
      })
    }

    return next(error)
  }
}
