import { updateHabitForUser } from '#db/index.js'
import { RequestHandler } from 'express'

const updateHabit: RequestHandler = async (req, res) => {
  const { id } = req.params
  const { name } = req.body

  if (!id || isNaN(Number(id))) {
    res.status(400).json({ message: 'Invalid habit ID' })
    return
  }

  if (!name || typeof name !== 'string' || name.trim() === '') {
    res.status(400).json({ message: 'Name is required and must be a non-empty string' })
    return
  }

  try {
    const habit = await updateHabitForUser(+id, req.userId!, name.trim())
    res.json(habit)
  } catch (error) {
    res.status(500).json({ message: 'Error updating habit' })
  }
}

export default updateHabit
