import { RequestHandler } from 'express'
import { z } from 'zod'

import { updateHabitForUser } from '#db/index.js'

const schema = z.object({
  id: z.coerce.number().min(1, 'ID is required'),
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name too long')
})

const updateHabit: RequestHandler = async (req, res) => {
  try {
    const { id } = schema.pick({ id: true }).parse(req.params)
    const { name } = schema.pick({ name: true }).parse(req.body)

    const habit = await updateHabitForUser(id, req.userId, name)

    res.status(200).json({ data: habit })
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: error.issues[0].message })
      return
    }
    if (typeof error === 'object' && error !== null && 'code' in error && error.code === 'P2025') {
      return res.status(404).json({
        message: 'Habit not found'
      })
    }

    res.status(500).json({ message: 'Error updating habit' })
  }
}

export default updateHabit
