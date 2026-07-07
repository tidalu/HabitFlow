import jwt from 'jsonwebtoken'
import request from 'supertest'
import { describe, expect, it } from 'vitest'

import app from '#index.js'

interface AuthResponse {
  error?: { message: string }[]
  message: string
  user?: {
    email: string
    id: string
    name: string
  }
}

const token = jwt.sign({ userId: '1e08e022-1470-4edd-91f0-fdbe94a3c9a8' }, process.env.JWT_SECRET ?? 'LIFE IS BEAUTIFUL', { expiresIn: '1d' })

const fakeUser = {
  email: `stevejobs-${Date.now().toString()}@apple.com`,
  name: 'Steve Jobs',
  password: 'strongPassword123'
}

describe('HabitLogs Authentication register', () => {
  it('should create an account', async () => {
    const res = await request(app).post('/auth/register').send(fakeUser).expect(201).expect('Content-Type', /json/)
    const body = res.body as AuthResponse

    expect(body.message).toBe('User registered successfully')
    expect(body.user?.email).toBe(fakeUser.email)
    expect(body.user?.name).toBe(fakeUser.name)

    expect(body.user?.id).toBeDefined()
    expect(typeof body.user?.id).toBe('string')
  })

  it('should not create an account with the same email', async () => {
    const res = await request(app).post('/auth/register').send(fakeUser).expect(409).expect('Content-Type', /json/)
    const body = res.body as AuthResponse

    expect(body.message).toBe('Email already exists')
  })

  it('should not create an account for logged in user', async () => {
    const res = await request(app).post('/auth/register').set('Cookie', `token=${token}`).expect(401).expect('Content-Type', /json/)
    const body = res.body as AuthResponse

    expect(body.message).toBe('You are already logged in')
  })
})

const user = {
  email: 'jsjsdq23@gmail.com',
  password: 'password123'
}

describe('HabitLogs Authentication login', () => {
  it('should login a user', async () => {
    const res = await request(app).post('/auth/login').send(user).expect(200).expect('Content-Type', /json/)
    const body = res.body as AuthResponse

    expect(body.message).toBe('Login Successful')
  })

  it('should not login with invalid password', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ ...user, password: 'wrongpassword' })
      .expect(401)
      .expect('Content-Type', /json/)
    const body = res.body as AuthResponse

    expect(body.message).toBe('Invalid password or email')
  })

  it('user does not exist', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ ...user, email: 'wrongemail@gmail.com' })
      .expect(401)
      .expect('Content-Type', /json/)
    const body = res.body as AuthResponse

    expect(body.message).toBe('Invalid email or password')
  })

  it('returns 400 for invalid email format', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        ...user,
        email: 'wrongemail'
      })
      .expect(400)
      .expect('Content-Type', /json/)

    const body = res.body as AuthResponse
    expect(body.error?.[0].message).toBe('Invalid email address')
  })
})
