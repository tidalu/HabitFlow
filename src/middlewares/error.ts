import { NextFunction, Request, Response } from 'express'

const ErrorHandler = (err: Error, req: Request, res: Response) => {
  res.status((err as unknown as { status?: number }).status || 500).json({
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  })
}

export default ErrorHandler
