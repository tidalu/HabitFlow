import { deleteHabitForUser } from '#db/index.js'
import { RequestHandler } from 'express'
import { z } from 'zod'

const schema = z.object({
  id: z.coerce.number().min(1, 'ID is required')
})
const deleteHabit: RequestHandler = async (req, res) => {
  try {
    const { id } = schema.parse(req.params)
    await deleteHabitForUser(id, req.userId!)
    res.json({ message: 'Habit deleted successfully' })
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: error.issues[0].message })
      return
    }
    res.status(500).json({ message: 'Error deleting habit' })
  }
}

export default deleteHabit
