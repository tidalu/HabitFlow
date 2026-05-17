import { getLogsForHabit } from '#db/index.js'
import { RequestHandler } from 'express'

const getLogs: RequestHandler = async (req, res) => {
  const { id } = req.params
  if (!id || isNaN(Number(id))) {
    res.status(400).json({ message: 'Invalid habit ID' })
    return
  }

  try {
    const logs = await getLogsForHabit(+id)
    res.status(200).json({ data: logs })
  } catch (error) {
    res.status(500).json({ message: 'Error fetching logs' })
  }
}

export default getLogs
