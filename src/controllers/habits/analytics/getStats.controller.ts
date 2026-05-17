import { getLogsForHabit } from '#db/index.js'
import { calculateStreak } from '#lib/analytics.js'
import { RequestHandler } from 'express'
import { StreakData } from '../../../../types/schema'

const getStats: RequestHandler = async (req, res) => {
  const habitId = req.params.id

  if (!habitId || typeof habitId !== 'string') {
    res.status(400).send('Habit ID is required')
    return
  }

  try {
    const logs = await getLogsForHabit(+habitId)
    const { currentStreak, longestStreak, completionRate, totalCompletions }: StreakData = calculateStreak({ habit_logs: logs })
    res.send({ currentStreak, longestStreak, completionRate, totalCompletions })
  } catch (error) {
    res.status(500).send(' Error calculating stats')
    return
  }
}

export default getStats
