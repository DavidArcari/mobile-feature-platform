import { Router } from 'express'
import { isFeatureEnabled } from '../services/rolloutService'

const router = Router()

router.get('/', (req, res) => {
  const userId = req.query.userId as string

  const newDashboardRollout = 0.3

  const newDashboardEnabled =
    userId && isFeatureEnabled(userId, newDashboardRollout)

  res.json({
    newDashboard: {
      enabled: newDashboardEnabled
    },
    payments: {
      enabled: false
    },
    newTheme: {
      enabled: true
    }
  })
})

export default router
