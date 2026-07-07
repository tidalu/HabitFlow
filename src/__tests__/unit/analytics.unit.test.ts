import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { calculateStreak } from '../../lib/analytics.js'

const logData = [
  { habitId: 2, id: 1, log_date: new Date('2026-05-10T22:25:57.050Z'), userId: 'u1' },
  { habitId: 2, id: 2, log_date: new Date('2026-05-11T22:28:39.772Z'), userId: 'u1' },
  { habitId: 2, id: 3, log_date: new Date('2026-05-12T22:28:39.772Z'), userId: 'u1' },
  { habitId: 2, id: 4, log_date: new Date('2026-05-14T22:28:41.928Z'), userId: 'u1' },
  { habitId: 2, id: 5, log_date: new Date('2026-05-15T22:28:42.527Z'), userId: 'u1' },
  { habitId: 2, id: 6, log_date: new Date('2026-05-16T08:11:48.320Z'), userId: 'u1' },
  { habitId: 2, id: 7, log_date: new Date('2026-05-17T12:00:00.000Z'), userId: 'u1' }
]

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2026-05-17T12:00:00.000Z'))
})

afterEach(() => {
  vi.useRealTimers()
})

const logs = logData.map((log) => ({
  log_date: log.log_date.toISOString()
}))

describe('Test calculateStreak function', () => {
  it('returns correct streak data for a habit with logs', () => {
    const calculatedStreak = calculateStreak({ habit_logs: logs })
    expect(calculatedStreak).toStrictEqual({
      completionRate: 87.5,
      currentStreak: 4,
      longestStreak: 4,
      totalCompletions: 7
    })
  })
})
