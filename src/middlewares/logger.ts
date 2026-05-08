import { RequestHandler } from 'express'
import responseTime from 'response-time'

export const logger: RequestHandler = responseTime((req, res, time) => {
  console.log(`${req.method} ${req.url} res.time: ${time} ms`)
})
