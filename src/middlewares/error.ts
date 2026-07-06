import { NextFunction, Request, Response } from 'express'

const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    next(err); return;
  }

  res.status(500).json({
    error: err.message || 'Internal Server Error',
  })
}

export default ErrorHandler
