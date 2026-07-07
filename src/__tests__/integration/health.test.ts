import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'

import app from '../../index.js'

beforeAll(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2026-07-06T14:46:52.018Z'))
})

afterAll(() => {
  vi.useRealTimers()
})

describe('Health Check Controller', () => {
  it('should return status ok and a timestamp', async () => {
    const res = await request(app).get('/health').expect(200).expect('Content-Type', /json/)

    expect(res.body).toEqual({
      status: 'ok',
      timestamp: new Date('2026-07-06T14:46:52.018Z').toISOString()
    })
  })
})
