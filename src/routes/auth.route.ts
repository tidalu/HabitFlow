import express from 'express'

import { loginHandler } from '../controllers/auth/login.controller.js'
import { registerHandler } from '../controllers/auth/register.controller.js'
const router = express.Router()

router.post('/register', registerHandler)
router.post('/login', loginHandler)

export default router
