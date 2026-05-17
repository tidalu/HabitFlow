import { createHabitForUser } from '#db/index.js'
import { RequestHandler } from 'express'

const createHabit: RequestHandler = async (req, res) => {
  try {
    const { name } = req.body
    console.log('Creating habit with name:', name, 'for userId:', req.userId)
    if (!name || typeof name !== 'string' || name.trim() === '') {
      res.status(400).json({ message: 'Name is required and must be a non-empty string' })
      return
    }

    const habit = await createHabitForUser(req.userId!, name.trim())
    res.status(201).json({ data: habit, message: 'Habit created successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error creating habit' })
  }
}

export default createHabit
