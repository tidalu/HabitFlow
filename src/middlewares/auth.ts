import { sessionDelete } from '#db/index.js'
import { Request, Response, NextFunction } from 'express'

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  const session = req.cookies.session || null
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' })
  } else {
    if (session.expires < new Date()) {
      await sessionDelete(session.session_id)
      return res.status(401).json({ message: 'Session expired' })
    }
    next()
  }
}
