import type { RequestHandler } from 'express'

export const middleware: RequestHandler = (req, res, next) => {
  req.customProperty = new Date().toISOString()
  next()
}
