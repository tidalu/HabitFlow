import { RequestHandler } from 'express'
import * as z from 'zod'

import { createHabitForUser } from '../../../db/index.js'

const schema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name too long')
})
const createHabit: RequestHandler = async (req, res) => {
  try {
    const { name } = schema.parse(req.body)

    const habit = await createHabitForUser(req.userId, name.trim())
    res.status(201).json({ data: habit, message: 'Habit created successfully' })
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: error.issues[0].message })
      return
    }
    res.status(500).json({ message: 'Error creating habit' })
  }
}

export default createHabit
