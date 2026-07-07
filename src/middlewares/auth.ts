// import { sessionDelete } from '../db/index.js'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET ?? 'LIFE IS BEAUTIFUL'

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not set. Using default secret. This is not recommended for production environments.')
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token as string | undefined
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized, token is not available , first login' })
  } else {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { userId: string }
      req.userId = decoded.userId
      next()
    } catch (err) {
      return res.status(401).json({ error: err, message: 'Unauthorized' })
    }
  }
}
