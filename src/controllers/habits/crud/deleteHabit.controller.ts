import { deleteHabitForUser } from '#db/index.js'
import { RequestHandler } from 'express'

const deleteHabit: RequestHandler = async (req, res) => {
  const { id } = req.params
  if (!id || isNaN(Number(id))) {
    res.status(400).json({ message: 'Invalid habit ID' })
    return
  }

  try {
    await deleteHabitForUser(+id, req.userId!)
    res.json({ message: 'Habit deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting habit' })
  }
}

export default deleteHabit
