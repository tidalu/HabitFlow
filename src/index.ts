import express from 'express'
import cookieParser from 'cookie-parser'
import swaggerUi from 'swagger-ui-express'
import Yaml from 'yamljs'

import { middleware } from '#middlewares/middleware.js'
import morgan from 'morgan'
import healthRoute from '#routes/health.route.js'
import authRoute from '#routes/auth.route.js'
import habitsRoute from '#routes/habits.route.js'
import logsRoute from '#routes/logs.route.js'
import analyticsRoute from '#routes/analytics.route.js'
import ErrorHandler from '#middlewares/error.js'
import { notFoundHandler } from '#middlewares/404.js'
import '#lib/cron.js'
import path from 'node:path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const port = process.env.PORT ?? '3000'

const app = express()

const swaggerSpec = Yaml.load('docs/swagger.yaml')

app.use(express.static('public'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(middleware)
app.use(morgan('combined'))
app.use(healthRoute)
app.use('/auth', authRoute)
app.use('/habits', habitsRoute)
app.use('/logs', logsRoute)
app.use('/analytics', analyticsRoute)

// 404 handler
app.use(notFoundHandler)

app.use(ErrorHandler)

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

export default app
