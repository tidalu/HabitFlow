import jwt from 'jsonwebtoken'
import request from 'supertest'
import { describe, expect, it } from 'vitest'

import app from '../../index.js'

const token = jwt.sign({ userId: '1e08e022-1470-4edd-91f0-fdbe94a3c9a8' }, process.env.JWT_SECRET ?? 'LIFE IS BEAUTIFUL', { expiresIn: '1d' })

interface HabitResponse {
  data: {
    createdAt: string
    id: number
    name: string
    userId: string
  }
  message: string
}

const createHabit = async () => {
  const res = await request(app)
    .post('/habits')
    .set('Cookie', `token=${token}`)
    .send({
      name: `Test Habit ${Date.now().toString()}`
    })
    .expect(201)
  const body = res.body as HabitResponse
  return body.data
}

describe('Create Habit', () => {
  it('should create a habit for a specific user', async () => {
    const res = await request(app)
      .post('/habits')
      .send({
        name: `Test Habit ${Date.now().toString()}`
      })
      .set('Cookie', `token=${token}`)
      .expect(201)
      .expect('Content-Type', /json/)
    const body = res.body as HabitResponse
    expect(body.message).toBe('Habit created successfully')
    expect(body.data.name).toMatch(/Test Habit \d+/)
    expect(body.data.id).toBeDefined()
    expect(typeof body.data.id).toBe('number')
    expect(body.data.userId).toBe('1e08e022-1470-4edd-91f0-fdbe94a3c9a8')
    expect(body.data.createdAt).toBeDefined()
    expect(typeof body.data.createdAt).toBe('string')
  })

  it('should not create a habit for a specific user if the name is empty', async () => {
    const res = await request(app)
      .post('/habits')
      .send({
        name: ''
      })
      .set('Cookie', `token=${token}`)
      .expect(400)
      .expect('Content-Type', /json/)
    const body = res.body as HabitResponse
    expect(body.message).toBe('Name is required')
  })

  it('should not create a habit for a specific user if the name is too long', async () => {
    const res = await request(app)
      .post('/habits')
      .send({
        name: 'a'.repeat(101)
      })
      .set('Cookie', `token=${token}`)
      .expect(400)
      .expect('Content-Type', /json/)
    const body = res.body as HabitResponse
    expect(body.message).toBe('Name too long')
  })

  it('should not create a habit for a specific user if the user is not logged in', async () => {
    const res = await request(app)
      .post('/habits')
      .send({
        name: `Test Habit ${Date.now().toString()}`
      })
      .expect(401)
      .expect('Content-Type', /json/)
    const body = res.body as HabitResponse
    expect(body.message).toBe('Unauthorized, token is not available , first login')
  })
})

describe('Get Habits', () => {
  it('should get habits for a specific user', async () => {
    const res = await request(app).get('/habits').set('Cookie', `token=${token}`).expect(200).expect('Content-Type', /json/)
    const body = res.body as { data: HabitResponse['data'][] }
    expect(Array.isArray(body.data)).toBe(true)
    body.data.forEach((habit) => {
      expect(habit).toHaveProperty('id')
      expect(habit).toHaveProperty('name')
      expect(habit).toHaveProperty('userId')
      expect(habit).toHaveProperty('createdAt')
    })
  })

  it('should not get habits for a specific user if the user is not logged in', async () => {
    const res = await request(app).get('/habits').expect(401).expect('Content-Type', /json/)
    const body = res.body as { message: string }
    expect(body.message).toBe('Unauthorized, token is not available , first login')
  })

  it('should return an empty array if the user has no habits', async () => {
    const newToken = jwt.sign({ userId: '00000000-0000-0000-0000-000000000000' }, process.env.JWT_SECRET ?? 'LIFE IS BEAUTIFUL', { expiresIn: '1d' })

    const res = await request(app).get('/habits').set('Cookie', `token=${newToken}`).expect(404).expect('Content-Type', /json/)

    const body = res.body as { data: []; message: string }

    expect(body.message).toBe('No habits found')
    expect(Array.isArray(body.data)).toBe(true)
    expect(body.data.length).toBe(0)
  })
})

describe('Update Habit', () => {
  it('should update a habit for a specific user', async () => {
    const habit = await createHabit()

    const res = await request(app)
      .put(`/habits/${habit.id.toString()}`)
      .send({
        name: 'Updated Habit Name'
      })
      .set('Cookie', `token=${token}`)
      .expect(200)
      .expect('Content-Type', /json/)

    const body = res.body as { data: HabitResponse['data'] }
    expect(body.data.name).toBe('Updated Habit Name')
    expect(body.data.id).toBe(habit.id)
    expect(body.data.userId).toBe(habit.userId)
  })

  it('should not update a habit for a specific user if the name is empty', async () => {
    const habit = await createHabit()

    const res = await request(app)
      .put(`/habits/${habit.id.toString()}`)
      .send({
        name: ''
      })
      .set('Cookie', `token=${token}`)
      .expect(400)
      .expect('Content-Type', /json/)
    const body = res.body as { message: string }
    expect(body.message).toBe('Name is required')
  })

  it('should not update a habit for a specific user if the name is too long', async () => {
    const habit = await createHabit()

    const res = await request(app)
      .put(`/habits/${habit.id.toString()}`)
      .send({
        name: 'a'.repeat(101)
      })
      .set('Cookie', `token=${token}`)
      .expect(400)
      .expect('Content-Type', /json/)
    const body = res.body as { message: string }
    expect(body.message).toBe('Name too long')
  })

  it('should not update a habit for a specific user if the user is not logged in', async () => {
    const habit = await createHabit()

    const res = await request(app)
      .put(`/habits/${habit.id.toString()}`)
      .send({
        name: 'Updated Habit Name'
      })
      .expect(401)
      .expect('Content-Type', /json/)
    const body = res.body as { message: string }
    expect(body.message).toBe('Unauthorized, token is not available , first login')
  })

  it('should not update a habit for a specific user if the habit does not exist', async () => {
    const res = await request(app)
      .put('/habits/9999')
      .send({
        name: 'Updated Habit Name'
      })
      .set('Cookie', `token=${token}`)
      .expect(404)
      .expect('Content-Type', /json/)
    const body = res.body as { message: string }
    expect(body.message).toBe('Habit not found')
  })
})

describe('Delete Habit', () => {
  it('should delete a habit for a specific user', async () => {
    const habit = await createHabit()

    const res = await request(app).delete(`/habits/${habit.id.toString()}`).set('Cookie', `token=${token}`).expect(200).expect('Content-Type', /json/)

    const body = res.body as { message: string }
    expect(body.message).toBe('Habit deleted successfully')
  })

  it('should not delete a habit for a specific user if the habit does not exist', async () => {
    const res = await request(app).delete('/habits/999999').set('Cookie', `token=${token}`).expect(404).expect('Content-Type', /json/)

    const body = res.body as { message: string }
    expect(body.message).toBe('Habit not found')
  })

  it('should not delete a habit for a specific user if the user is not logged in', async () => {
    const habit = await createHabit()

    const res = await request(app).delete(`/habits/${habit.id.toString()}`).expect(401).expect('Content-Type', /json/)

    const body = res.body as { message: string }
    expect(body.message).toBe('Unauthorized, token is not available , first login')
  })
})
