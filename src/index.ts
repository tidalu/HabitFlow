import express from 'express'

import { middleware } from '#middlewares/middleware.js'
import morgan from 'morgan'
// import { logger } from '#middlewares/logger.js'
import healthRoute from '#routes/health.route.js'
import ErrorHandler from '#middlewares/error.js'
import { notFoundHandler } from '#middlewares/404.js'
const app = express()

const port = process.env.PORT ?? '3000'

app.use(middleware)
// app.use(logger)
app.use(morgan('combined'))
app.use(healthRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(notFoundHandler)

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)

  server.close(() => {
    process.exit(1)
  })
})

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err)

  server.close(() => {
    process.exit(1)
  })
})

app.use(ErrorHandler)
export default app
