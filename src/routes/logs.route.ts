import express from 'express'
import createLogHandler from '#controllers/habits/habitlogs/createLog.controller.js'
import getLogsHandler from '#controllers/habits/habitlogs/getLogs.controller.js'
import { isAuthenticated } from '#middlewares/auth.js'
const router = express.Router()

router.use(isAuthenticated)

router.post('/:id/logs', createLogHandler)
router.get('/:id/logs', getLogsHandler)

export default router
