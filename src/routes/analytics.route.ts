import express from 'express'

import getStatsHandler from '../controllers/habits/analytics/getStats.controller.js'
import { isAuthenticated } from '../middlewares/auth.js'

const router = express.Router()
router.use(isAuthenticated) // Apply authentication middleware to all routes in this router

router.get('/:id', getStatsHandler)

export default router
