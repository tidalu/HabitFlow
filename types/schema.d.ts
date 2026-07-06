import { z } from 'zod'

const User = z.object({ email: z.string(), id: z.string(), name: z.string(), password: z.string() })
const Habits = z.object({ createdAt: z.date(), id: z.number(), name: z.string(), userId: z.string() })
const Habit_logs = z.object({ habitId: z.number(), id: z.number(), log_date: z.date(), userId: z.string() })
const StreakData = z.object({ completionRate: z.number(), currentStreak: z.number(), longestStreak: z.number(), totalCompletions: z.number() })

type Habit_logs = z.infer<typeof Habit_logs>

type Habits = z.infer<typeof Habits>

type StreakData = z.infer<typeof StreakData>

type User = z.infer<typeof User>

export type { Habit_logs, Habits, StreakData, User }
