import { NextFunction, Request, Response } from 'express'
import z from 'zod'

const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    next(err)
    return
  }

  if (err instanceof z.ZodError) {
    return res.status(400).json({
      error: err.issues
    })
  }

  res.status(500).json({
    error: err.message || 'Internal Server Error'
  })
}

export default ErrorHandler
