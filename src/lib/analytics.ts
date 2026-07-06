import type { StreakData } from '../../types/schema'

interface HabitLogData {
  log_date: Date | string
}

const DAY_IN_MS = 24 * 60 * 60 * 1000

export const calculateStreak = ({ habit_logs }: { habit_logs: HabitLogData[] }): StreakData => {
  const completedDays = [...new Set(habit_logs.map((log) => toUtcDay(log.log_date)))].sort((a, b) => a - b)
  const totalCompletions = habit_logs.length

  if (completedDays.length === 0) {
    return {
      completionRate: 0,
      currentStreak: 0,
      longestStreak: 0,
      totalCompletions
    }
  }

  const firstLog = completedDays[0]
  const lastLog = completedDays[completedDays.length - 1]
  const loggedDayCount = lastLog - firstLog + 1
  const completionRate = (completedDays.length / loggedDayCount) * 100

  const today = toUtcDay(new Date())
  const diff = today - lastLog

  let currentStreak = 1
  if (diff > 1) {
    currentStreak = 0
  } else {
    for (let i = completedDays.length - 1; i > 0; i--) {
      if (completedDays[i] - completedDays[i - 1] === 1) {
        currentStreak++
      } else {
        break
      }
    }
  }

  let longestStreak = 1
  let streak = 1

  for (let i = 1; i < completedDays.length; i++) {
    if (completedDays[i] - completedDays[i - 1] === 1) {
      streak++
      if (streak > longestStreak) {
        longestStreak = streak
      }
    } else {
      streak = 1
    }
  }

  return {
    completionRate,
    currentStreak,
    longestStreak,
    totalCompletions
  }
}

function toUtcDay(date: Date | string): number {
  const parsedDate = date instanceof Date ? date : new Date(date)

  return Math.floor(Date.UTC(parsedDate.getUTCFullYear(), parsedDate.getUTCMonth(), parsedDate.getUTCDate()) / DAY_IN_MS)
}
