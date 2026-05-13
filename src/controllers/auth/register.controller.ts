import { createUser } from '#db/index.js'
import { RequestHandler } from 'express'

export const registerHander: RequestHandler = async (req, res) => {
  const dummyUser = {
    name: 'John Doe',
    email: 'ulugbek@google.com',
    password: 'password123',
  }
  const response = await createUser(dummyUser)
  res.status(201).json({ message: 'User registered successfully', data: response })
}
