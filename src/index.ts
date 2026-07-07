import '#lib/cron.js'
import cookieParser from 'cookie-parser'
import express from 'express'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'
import Yaml from 'yamljs'

import { notFoundHandler } from '#middlewares/404.js'
import ErrorHandler from '#middlewares/error.js'
import { middleware } from '#middlewares/middleware.js'
import analyticsRoute from '#routes/analytics.route.js'
import authRoute from '#routes/auth.route.js'
import habitsRoute from '#routes/habits.route.js'
import healthRoute from '#routes/health.route.js'
import logsRoute from '#routes/logs.route.js'

const app = express()

const swaggerSpec = Yaml.load('docs/swagger.yaml') as Record<string, unknown>

app.use(express.static('public'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(middleware)
app.use(morgan('dev'))
app.use(healthRoute)
app.use('/auth', authRoute)
app.use('/habits', habitsRoute)
app.use('/logs', logsRoute)
app.use('/analytics', analyticsRoute)

// 404 handler
app.use(notFoundHandler)

app.use(ErrorHandler)

export default app
