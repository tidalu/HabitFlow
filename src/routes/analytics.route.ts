import express from 'express'
import getStatsHandler from '#controllers/habits/analytics/getStats.controller.js'

const router = express.Router()

router.get('/:id/stats', getStatsHandler)

export default router
