import jwt from 'jsonwebtoken'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'

import app from '#index.js'

const token = jwt.sign({ userId: '1e08e022-1470-4edd-91f0-fdbe94a3c9a8' }, process.env.JWT_SECRET ?? 'LIFE IS BEAUTIFUL', { expiresIn: '1d' })

beforeAll(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2026-07-06T14:46:52.018Z'))
})

afterAll(() => {
  vi.useRealTimers()
})

const data = {
  data: [
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
}

describe('Habit Logs Controller', () => {
  it('should return logs for a specific habit', () => {
    request(app)
      .get('/logs/2')
      .set('Cookie', `token=${token}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) throw err
        expect(res.body).toEqual(data)
      })
  })
})

const log = {
  habitId: 2,
  id: 8,
  log_date: '2026-07-06T14:46:52.018Z',
  userId: '1e08e022-1470-4edd-91f0-fdbe94a3c9a8'
}

describe('Create Log Controller', () => {
  it('should create a log for a specific habit', () => {
    request(app)
      .post('/logs/2')
      .set('Cookie', `token=${token}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) throw err
        expect(res.body).toEqual({ data: log, message: 'Log created successfully' })
      })
  })
})
