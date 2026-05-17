import { getHabitsForUser } from '#db/index.js'
import { RequestHandler } from 'express'

const getAllHabits: RequestHandler = async (req, res) => {
  try {
    const habits = await getHabitsForUser(req.userId!)
    res.status(200).json({ data: habits })
  } catch (error) {
    res.status(500).json({ message: 'Error fetching habits' })
  }
}

export default getAllHabits
