import express from 'express'

import createHabitHandler from '#controllers/habits/crud/createHabit.controller.js'
import deleteHabitHandler from '#controllers/habits/crud/deleteHabit.controller.js'
import getAllHabitsHandler from '#controllers/habits/crud/getAllHabits.controller.js'
import updateHabitHandler from '#controllers/habits/crud/updateHabit.controller.js'
import { isAuthenticated } from '#middlewares/auth.js'
const router = express.Router()
router.use(isAuthenticated) // Apply authentication middleware to all routes in this router

router.get('/', getAllHabitsHandler)
router.post('/', createHabitHandler)
router.put('/:id', updateHabitHandler)
router.delete('/:id', deleteHabitHandler)

export default router
