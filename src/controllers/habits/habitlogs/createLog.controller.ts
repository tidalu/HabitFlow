import { RequestHandler } from 'express'
import * as z from 'zod'

import { createLogForHabit, getHabitForUser, getLastLogForHabit } from '#db/index.js'

import type { Habit_logs } from '../../../../types/schema'

const schema = z.object({
  id: z.coerce.number().min(1, 'ID is required')
})
const createLog: RequestHandler = async (req, res) => {
  try {
    const { id } = schema.parse(req.params)
    const habit = await getHabitForUser(id, req.userId)
    if (!habit) {
      res.status(404).json({ message: 'Habit not found' })
      return
    }

    const logs = (await getLastLogForHabit(id)) as Habit_logs

    const sameDay =
      logs.log_date.getDate() === new Date().getDate() &&
      logs.log_date.getMonth() === new Date().getMonth() &&
      logs.log_date.getFullYear() === new Date().getFullYear()

    if (sameDay) {
      res.status(400).json({ message: 'Log for today already exists' })
      return
    }

    const log = await createLogForHabit(id, req.userId)
    res.status(201).json({ data: log, message: 'Log created successfully' })
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: error.issues[0].message })
      return
    }
    res.status(500).json({ message: 'Internal error occured while creating log' })
  }
}

export default createLog
