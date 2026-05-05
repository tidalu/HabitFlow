import express from 'express'

import { middleware } from '#middlewares/middleware.js'
import healthRoute from '#routes/health.route.js'

const app = express()

const port = process.env.PORT ?? '3000'

app.use(middleware)
app.use(healthRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
