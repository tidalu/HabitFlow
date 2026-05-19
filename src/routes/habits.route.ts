import express from 'express'
import getAllHabitsHandler from '#controllers/habits/crud/getAllHabits.controller.js'
import createHabitHandler from '#controllers/habits/crud/createHabit.controller.js'
import updateHabitHandler from '#controllers/habits/crud/updateHabit.controller.js'
import deleteHabitHandler from '#controllers/habits/crud/deleteHabit.controller.js'
import { isAuthenticated } from '#middlewares/auth.js'
const router = express.Router()

router.get('/', isAuthenticated, getAllHabitsHandler)
router.post('/', createHabitHandler)
router.put('/:id', updateHabitHandler)
router.delete('/:id', deleteHabitHandler)

export default router
