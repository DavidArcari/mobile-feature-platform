import { api } from '../api/client'
import { AnalyticsEvent } from '../types/analytics'

export async function trackEvent(event: AnalyticsEvent) {
  try {
    await api.post('/analytics', event)
  } catch (error) {
    console.log('analytics error', error)
  }
}
