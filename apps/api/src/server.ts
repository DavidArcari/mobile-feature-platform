import express from 'express'
import cors from 'cors'

import flagsRoutes from './routes/flags'
import experimentsRoutes from './routes/experiments'
import analyticsRoutes from './routes/analytics'
import configRoutes from './routes/config'
import resultsRoutes from './routes/results'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/flags', flagsRoutes)
app.use('/experiments', experimentsRoutes)
app.use('/analytics', analyticsRoutes)
app.use('/config', configRoutes)
app.use('/experiments', resultsRoutes)

const PORT = 3000

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API running on port ${PORT}`)
})
