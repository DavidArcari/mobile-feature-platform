import { Router } from 'express'
// import { isFeatureEnabled } from '../services/rolloutService'
import { getExperimentVariant } from '../services/experimentService'

const router = Router()

router.get('/', (req, res) => {
  const userId = req.query.userId as string
  console.log('CONFIG REQUEST RECEIVED')

  // const newDashboardRollout = 0.3

  // const newDashboardEnabled =
  //   userId && isFeatureEnabled(userId, newDashboardRollout)

  const experimentVariant =
    userId && getExperimentVariant(userId, ['A', 'B'], [0.5, 0.5])

  res.json({
    flags: {
      newDashboard: false,
      payments: false,
      newTheme: true
    },
    experiments: {
      dashboardLayout: experimentVariant
    }
  })
})

export default router
