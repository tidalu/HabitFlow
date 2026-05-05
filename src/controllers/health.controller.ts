import { RequestHandler } from 'express'

const healthCheck: RequestHandler = (req, res) => {
  res.status(200).json({
    customProperty: req.customProperty,
    status: 'ok',
    timestamp: new Date(),
  })
}

export { healthCheck }
