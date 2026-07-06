import { afterEach, beforeEach, expect, test, vi } from 'vitest'

import { calculateStreak } from '#lib/analytics.js'

const logData = [
  {
    habitId: 2,
    id: 1,
    log_date: '2026-05-10T22:25:57.050Z',
    userId: '1e08e022-1470-4edd-91f0-fdbe94a3c9a8'
  },
  {
    habitId: 2,
    id: 2,
    log_date: '2026-05-11T22:28:39.772Z',
    userId: '1e08e022-1470-4edd-91f0-fdbe94a3c9a8'
  },
  {
    habitId: 2,
    id: 3,
    log_date: '2026-05-12T22:28:39.772Z',
    userId: '1e08e022-1470-4edd-91f0-fdbe94a3c9a8'
  },
  {
    habitId: 2,
    id: 4,
    log_date: '2026-05-14T22:28:41.928Z',
    userId: '1e08e022-1470-4edd-91f0-fdbe94a3c9a8'
  },
  {
    habitId: 2,
    id: 5,
    log_date: '2026-05-15T22:28:42.527Z',
    userId: '1e08e022-1470-4edd-91f0-fdbe94a3c9a8'
  },
  {
    habitId: 2,
    id: 6,
    log_date: '2026-05-16T08:11:48.320Z',
    userId: '1e08e022-1470-4edd-91f0-fdbe94a3c9a8'
  },
  {
    habitId: 2,
    id: 7,
    log_date: '2026-05-17T06:11:59.718Z',
    userId: '1e08e022-1470-4edd-91f0-fdbe94a3c9a8'
  }
]

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2026-05-17T12:00:00.000Z'))
})

afterEach(() => {
  vi.useRealTimers()
})

test('Calculate and return analytics', () => {
  expect(calculateStreak({ habit_logs: logData })).toEqual({
    completionRate: 87.5,
    currentStreak: 4,
    longestStreak: 4,
    totalCompletions: 7
  })
})
