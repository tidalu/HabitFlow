import { createLogForHabit, getLastLogForHabit } from '#db/index.js'
import { RequestHandler } from 'express'

const createLog: RequestHandler = async (req, res) => {
  const { id } = req.params
  if (!id || isNaN(Number(id))) {
    res.status(400).json({ message: 'Invalid habit ID' })
    return
  }
  const today = new Date().getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  const lastLogDate = (await getLastLogForHabit(+id))?.log_date?.getDate()
  const lastLogMonth = (await getLastLogForHabit(+id))?.log_date?.getMonth()
  const lastLogYear = (await getLastLogForHabit(+id))?.log_date?.getFullYear()
  if (lastLogDate === today && lastLogMonth === month && lastLogYear === year) {
    res.status(400).json({ message: 'Log for today already exists' })
    return
  }

  try {
    const log = await createLogForHabit(+id)
    res.status(201).json({ data: log, message: 'Log created successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error creating log' })
  }
}

export default createLog
