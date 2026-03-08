import { Router } from 'express'
import { addExposure, addConversion } from '../services/analyticsStore'

const router = Router()

router.post('/', (req, res) => {
  const event = req.body

  console.log('Analytics event:', event)

  if (event.event === 'experiment_exposure') {
    addExposure(event.experiment, event.variant)
  }

  if (event.event === 'conversion') {
    addConversion(event.name)
  }

  res.json({
    status: 'ok'
  })
})

export default router
