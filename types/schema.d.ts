export interface Habit_logs {
  habitId: number
  id: number
  log_date: Date
  userId: string
}

export interface Habits {
  createdAt: Date
  description: string
  id: number
  name: string
  userId: string
}

export interface StreakData {
  completionRate: number
  currentStreak: number
  longestStreak: number
  totalCompletions: number
}

export interface User {
  email: string
  id: string
  name: string
  password: string
}
