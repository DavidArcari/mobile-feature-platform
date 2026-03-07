import { Router } from 'express'

const router = Router()

router.post('/', (req, res) => {
  console.log('Analytics event:', req.body)

  res.json({
    status: 'ok'
  })
})

export default router
