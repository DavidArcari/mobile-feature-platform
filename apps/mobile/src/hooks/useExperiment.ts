import { useEffect, useRef } from 'react'
import { useFeatureFlagsContext } from '../providers/FeatureFlagProvider'
import { trackEvent } from '../services/analyticsService'

export function useExperiment(name: string): string | null {
  const config = useFeatureFlagsContext()
  const variant = config?.experiments[name] ?? null

  const tracked = useRef(false)

  useEffect(() => {
    if (!variant) return
    if (tracked.current) return

    trackEvent({
      event: 'experiment_exposure',
      experiment: name,
      variant
    })

    tracked.current = true
  }, [variant])

  return variant
}
