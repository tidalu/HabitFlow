import { Habit_logs, StreakData } from '../../types/schema'

export const calculateStreak = ({ habit_logs }: { habit_logs: Habit_logs[] }): StreakData => {
  let currentStreak = 1
  let longestStreak = 0
  let totalCompletions = habit_logs.length
  let completionRate = 0
  let streak = 1

  if (habit_logs.length === 0) {
    return { currentStreak: 0, longestStreak, totalCompletions, completionRate }
  }

  let firstLog = date(habit_logs[0].log_date)
  let lastLog = date(habit_logs[habit_logs.length - 1].log_date)
  let all = lastLog - firstLog + 1
  console.log(all, firstLog, lastLog)
  completionRate = (totalCompletions / all) * 100

  const today = date(new Date())
  const lastLogDate = date(habit_logs[habit_logs.length - 1].log_date)
  const diff = today - lastLogDate

  if (diff > 1) {
    currentStreak = 0
  } else {
    for (let i = habit_logs.length - 1; i > 0; i--) {
      const curr = date(habit_logs[i].log_date)
      const prev = date(habit_logs[i - 1].log_date)
      if (curr - prev === 1) {
        currentStreak++
      } else {
        break
      }
    }
  }

  for (let i = 1; i < habit_logs.length; i++) {
    const currentLogDate = date(habit_logs[i].log_date)
    const previousLogDate = date(habit_logs[i - 1].log_date)

    if (currentLogDate - previousLogDate === 1) {
      streak++
      if (streak > longestStreak) {
        longestStreak = streak
      }
    } else {
      streak = 1
    }
  }

  return {
    currentStreak,
    longestStreak,
    totalCompletions,
    completionRate,
  }
}

function date(date: Date): number {
  let stringDate = date

  console.log(new Date(date.toISOString().split('T')[0]).getDate())
  return new Date(date.toISOString().split('T')[0]).getDate()
}
