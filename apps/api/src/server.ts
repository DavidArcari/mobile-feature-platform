import express from 'express'
import cors from 'cors'

import flagsRoutes from './routes/flags'
import experimentsRoutes from './routes/experiments'
import analyticsRoutes from './routes/analytics'
import configRoutes from './routes/config'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/flags', flagsRoutes)
app.use('/experiments', experimentsRoutes)
app.use('/analytics', analyticsRoutes)
app.use('/config', configRoutes)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`)
})
