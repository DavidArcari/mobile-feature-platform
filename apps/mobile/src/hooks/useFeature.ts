import { useFeatureFlagsContext } from '../providers/FeatureFlagProvider'

export function useFeature(flag: string): boolean {
  const config = useFeatureFlagsContext()

  if (!config) return false

  return config.flags[flag] ?? false
}
