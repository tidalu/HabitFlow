import { NextFunction, Request, Response } from 'express'

const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if(res.headersSent) {
    return next(err)
  }

  res.status(500).json({
    error: err.message || 'Internal Server Error'
  })
  res.render('error', { error: err })
}

export default ErrorHandler
