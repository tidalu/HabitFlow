// import { sessionDelete } from '#db/index.js'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'LIFE IS BEAUTIFUL'

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not set. Using default secret. This is not recommended for production environments.')
}

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token || null
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  } else {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { userId: string }
      req.userId = decoded.userId
      next()
    } catch (err) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
  }
}
