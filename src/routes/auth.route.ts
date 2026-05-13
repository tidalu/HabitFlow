import express from 'express'
import { registerHander } from '#controllers/auth/register.controller.js'
const router = express.Router()

router.post('/register', registerHander)

export default router
