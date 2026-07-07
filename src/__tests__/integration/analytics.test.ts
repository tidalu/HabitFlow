import jwt from 'jsonwebtoken'
import request from 'supertest'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { getHabitForUser, getLogsForHabit } from '#db/index.js'
import app from '#index.js'
import { calculateStreak } from '#lib/analytics.js'

// Mock only the DB layer — let the real calculateStreak logic run
vi.mock('#db/index.js', () => ({
  getHabitForUser: vi.fn(),
  getLogsForHabit: vi.fn()
}))

const mockGetHabitForUser = vi.mocked(getHabitForUser)
const mockGetLogsForHabit = vi.mocked(getLogsForHabit)

// Reuse whichever token helper your existing habits API tests use
// (from your memory this project already has working habit integration tests —
// grab the same helper/fixture from there rather than re-deriving auth here)
const token = jwt.sign({ userId: '1e08e022-1470-4edd-91f0-fdbe94a3c9a8' }, process.env.JWT_SECRET ?? 'LIFE IS BEAUTIFUL', { expiresIn: '1d' })

const logData = [
  { habitId: 2, id: 1, log_date: new Date('2026-05-10T22:25:57.050Z'), userId: 'u1' },
  { habitId: 2, id: 2, log_date: new Date('2026-05-11T22:28:39.772Z'), userId: 'u1' },
  { habitId: 2, id: 3, log_date: new Date('2026-05-12T22:28:39.772Z'), userId: 'u1' },
  { habitId: 2, id: 4, log_date: new Date('2026-05-14T22:28:41.928Z'), userId: 'u1' },
  { habitId: 2, id: 5, log_date: new Date('2026-05-15T22:28:42.527Z'), userId: 'u1' },
  { habitId: 2, id: 6, log_date: new Date('2026-05-16T08:11:48.320Z'), userId: 'u1' },
  { habitId: 2, id: 7, log_date: new Date('2026-05-17T12:00:00.000Z'), userId: 'u1' }
]

const logs = logData.map((log) => ({
  log_date: log.log_date.toISOString()
}))

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2026-05-17T12:00:00.000Z'))
  vi.clearAllMocks()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('GET /analytics/:id', () => {
  it('returns correct analytics for a habit with logs', async () => {
    mockGetHabitForUser.mockResolvedValue({
      createdAt: new Date('2026-05-09T00:00:00.000Z'),
      id: 2,
      name: 'Read',
      userId: 'u1'
    })
    mockGetLogsForHabit.mockResolvedValue(logData)

    const calculatedStreak = calculateStreak({ habit_logs: logs })

    const res = await request(app).get('/analytics/2').set('Cookie', `token=${token}`).expect(200).expect('Content-Type', /json/)

    expect(res.body).toStrictEqual(calculatedStreak)

    expect(mockGetHabitForUser).toHaveBeenCalledWith(2, expect.any(String))
    expect(mockGetLogsForHabit).toHaveBeenCalledWith(2)
  })

  it('returns 404 when the habit does not belong to the user / does not exist', async () => {
    mockGetHabitForUser.mockResolvedValue(null)

    const res = await request(app).get('/analytics/999').set('Cookie', `token=${token}`).expect(404)

    expect(res.body).toEqual({ message: 'Habit not found' })
    expect(mockGetLogsForHabit).not.toHaveBeenCalled()
  })

  it('returns 404 when the habit has no logs', async () => {
    mockGetHabitForUser.mockResolvedValue({
      createdAt: new Date('2026-05-10T00:00:00.000Z'),
      id: 2,
      name: 'Read',
      userId: 'u1'
    })
    mockGetLogsForHabit.mockResolvedValue([])

    const res = await request(app).get('/analytics/2').set('Cookie', `token=${token}`).expect(404)

    expect(res.body).toStrictEqual({ message: 'Habit not found' })
  })

  it('returns 500 when the DB throws', async () => {
    mockGetHabitForUser.mockRejectedValue(new Error('DB connection failed'))

    const res = await request(app).get('/analytics/2').set('Cookie', `token=${token}`).expect(500)

    expect(res.body).toEqual({ message: 'Error fetching logs' })
  })

  it('rejects requests without auth', async () => {
    const res = await request(app).get('/analytics/2').expect(401) // adjust to

    expect(res.body).toEqual({ message: 'Unauthorized, token is not available , first login' })
  })
})
