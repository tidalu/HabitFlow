import { RequestHandler } from 'express'
import * as z from 'zod'

import { getHabitForUser, getLogsForHabit } from '#db/index.js'
import { calculateStreak } from '#lib/analytics.js'

import { StreakData } from '../../../../types/schema'

const getStats: RequestHandler = async (req, res) => {
  try {
    const habitId = z.string().parse(req.params.id)
    const habit = await getHabitForUser(+habitId, req.userId)
    if (!habit) {
      res.status(404).json({ message: 'Habit not found' })
      return
    }

    const logs = await getLogsForHabit(+habitId)

    if (logs.length === 0) {
      res.status(404).json({ message: 'Habit not found' })
      return
    }

    const { completionRate, currentStreak, longestStreak, totalCompletions }: StreakData = calculateStreak({ habit_logs: logs })
    res.status(200).send({ completionRate, currentStreak, longestStreak, totalCompletions })
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: error.issues[0].message })
      return
    }
    if (error instanceof Error) res.status(500).json({ message: 'Error fetching logs' })

    return
  }
}

export default getStats
