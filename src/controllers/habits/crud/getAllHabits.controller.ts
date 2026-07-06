import { RequestHandler } from 'express'

import { getHabitsForUser } from '#db/index.js'

const getAllHabits: RequestHandler = async (req, res) => {
  try {
    const habits = await getHabitsForUser(req.userId)
    res.status(200).json({ data: habits })
  } catch (error) {
    res.status(500).json({ error: error, message: 'Error fetching habits' })
  }
}

export default getAllHabits
