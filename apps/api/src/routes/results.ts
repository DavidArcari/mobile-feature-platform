import { Router } from 'express'
import { exposures, conversions } from '../services/analyticsStore'

const router = Router()

router.get('/:experiment/results', (req, res) => {
  const { experiment } = req.params

  const experimentExposures = exposures.filter(
    (e) => e.experiment === experiment
  )

  const variants: Record<string, number> = {}

  for (const exposure of experimentExposures) {
    variants[exposure.variant] = (variants[exposure.variant] || 0) + 1
  }

  const totalConversions = conversions.length

  type VariantResult = {
    users: number
    conversions: number
    rate: number
  }

  const results: Record<string, VariantResult> = {}

  for (const variant in variants) {
    const users = variants[variant]

    const rate = users > 0 ? totalConversions / users : 0

    results[variant] = {
      users,
      conversions: totalConversions,
      rate
    }
  }

  res.json(results)
})

export default router
