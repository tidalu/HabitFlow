type User = {
  id: string
  email: string
  name: string
  password: string
}

type Habits = {
  id: number
  name: string
  createdAt: Date
  userId: string
}

type Habit_logs = {
  id: number
  log_date: Date
  habitId: number
}

type StreakData = {
  currentStreak: number
  longestStreak: number
  totalCompletions: number
  completionRate: number
}

export type { User, Habits, Habit_logs, StreakData }
