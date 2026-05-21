import { createLogForHabit, getLastLogForHabit } from '#db/index.js'
import { RequestHandler } from 'express'
import * as z from 'zod'
import { Habit_logs } from '../../../../types/schema'

const schema = z.object({
  id: z.coerce.number().min(1, 'ID is required')
})
const createLog: RequestHandler = async (req, res) => {
  try {
    const { id } = schema.parse(req.params)

    const logs = (await getLastLogForHabit(id)) as Habit_logs
    const lastLog = logs?.log_date

    if (lastLog) {
      const sameDay =
        lastLog?.getDate() === new Date().getDate() &&
        lastLog?.getMonth() === new Date().getMonth() &&
        lastLog?.getFullYear() === new Date().getFullYear()

      if (sameDay) {
        res.status(400).json({ message: 'Log for today already exists' })
        return
      }
    }

    const log = await createLogForHabit(id)
    res.status(201).json({ data: log, message: 'Log created successfully' })
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: error.issues[0].message })
      return
    }
    res.status(500).json({ message: 'Error creating log' })
  }
}

export default createLog
