import { Router } from 'express'
import { getExperimentVariant } from '../services/experimentService'

const router = Router()

router.get('/', (req, res) => {
  const userId = req.query.userId as string

  const variants = ['A', 'B']
  const distribution = [0.5, 0.5]

  const variant = userId && getExperimentVariant(userId, variants, distribution)

  res.json({
    dashboardLayout: {
      variant
    }
  })
})

export default router
