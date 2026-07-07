export type User = {
  email: string
  id: string
  name: string
  password: string
}

export type Habits = {
  createdAt: Date
  id: number
  name: string
  userId: string
}

export type Habit_logs = {
  habitId: number
  id: number
  log_date: Date
  userId: string
}

export type StreakData = {
  completionRate: number
  currentStreak: number
  longestStreak: number
  totalCompletions: number
}
