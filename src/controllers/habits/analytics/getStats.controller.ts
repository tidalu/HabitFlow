import * as z from 'zod'
import { getLogsForHabit } from '#db/index.js'
import { calculateStreak } from '#lib/analytics.js'
import { RequestHandler } from 'express'
import { StreakData } from '../../../../types/schema'

const getStats: RequestHandler = async (req, res) => {
  try {
    const habitId = z.string().parse(req.params.id)
    const logs = await getLogsForHabit(+habitId)
    const { currentStreak, longestStreak, completionRate, totalCompletions }: StreakData = calculateStreak({ habit_logs: logs })
    res.status(200).send({ currentStreak, longestStreak, completionRate, totalCompletions })
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
