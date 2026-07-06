import { RequestHandler } from 'express'
import { z } from 'zod'

import { getHabitForUser, getLogsForHabit } from '#db/index.js'

const schema = z.object({
  id: z.coerce.number().min(1, 'ID is required')
})
const getLogs: RequestHandler = async (req, res) => {
  try {
    const { id } = schema.parse(req.params)

    const habit = await getHabitForUser(id, req.userId)
    if (!habit) {
      res.status(404).json({ message: 'Habit not found' })
      return
    }

    const logs = await getLogsForHabit(id)
    res.status(200).json({ data: logs })
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: error.issues[0].message })
      return
    }
    res.status(500).json({ message: 'Error fetching logs' })
  }
}

export default getLogs
