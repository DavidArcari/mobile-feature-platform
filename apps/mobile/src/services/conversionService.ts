import { trackEvent } from './analyticsService'

export function trackConversion(name: string) {
  trackEvent({
    event: 'conversion',
    name
  })
}
