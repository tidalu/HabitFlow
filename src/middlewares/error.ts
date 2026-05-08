import { Request, Response, NextFunction } from 'express'

const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status((err as any).status || 500).json({
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  })
}

export default ErrorHandler
