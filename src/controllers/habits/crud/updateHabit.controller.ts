import { updateHabitForUser } from '#db/index.js'
import { RequestHandler } from 'express'
import { z } from 'zod'

const schemaId = z.object({
  id: z.coerce.number().min(1, 'ID is required')
})
const schemaName = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name too long')
})
const updateHabit: RequestHandler = async (req, res) => {
  try {
    const { id } = schemaId.parse(req.params)
    const { name } = schemaName.parse(req.body)

    const habit = await updateHabitForUser(id, req.userId!, name)
    res.json(habit)
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: error.issues[0].message })
      return
    }
    res.status(500).json({ message: 'Error updating habit' })
  }
}

export default updateHabit
