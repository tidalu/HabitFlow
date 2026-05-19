import { z } from 'zod'

const User = z.object({ id: z.string(), email: z.string(), name: z.string(), password: z.string() })
const Habits = z.object({ id: z.number(), name: z.string(), createdAt: z.date(), userId: z.string() })
const Habit_logs = z.object({ id: z.number(), log_date: z.date(), habitId: z.number() })
const StreakData = z.object({ currentStreak: z.number(), longestStreak: z.number(), totalCompletions: z.number(), completionRate: z.number() })

type User = z.infer<typeof User>

type Habits = z.infer<typeof Habits>

type Habit_logs = z.infer<typeof Habit_logs>

type StreakData = z.infer<typeof StreakData>

export type { User, Habits, Habit_logs, StreakData }
