import { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import { fetchConfig } from '../services/configService'

type FeatureConfig = {
  flags: Record<string, boolean>
  experiments: Record<string, string>
}

export function useFeatureFlags() {
  const [config, setConfig] = useState<FeatureConfig | null>(null)

  useEffect(() => {
    async function load() {
      let userId = await SecureStore.getItemAsync('userId')

      if (!userId) {
        userId = Math.random().toString(36).substring(2)
        await SecureStore.setItemAsync('userId', userId)
      }

      const data = await fetchConfig(userId)
      setConfig(data)
    }

    load()
  }, [])

  return config
}
