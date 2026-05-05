import type { NextFunction, Request, RequestHandler, Response } from 'express'

export const middleware: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  res.send('Middleware executed')
  next()
}
