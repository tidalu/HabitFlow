import express from 'express'

import { healthCheck } from '#controllers/health.controller.js'
import { isAuthenticated } from '#middlewares/auth.js'

const router = express.Router()
router.use(isAuthenticated)

router.get('/health', healthCheck)

export default router
