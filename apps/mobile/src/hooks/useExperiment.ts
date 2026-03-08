import { useFeatureFlagsContext } from '../providers/FeatureFlagProvider'

export function useExperiment(name: string): string | null {
  const config = useFeatureFlagsContext()

  if (!config) return null

  return config.experiments[name] ?? null
}
