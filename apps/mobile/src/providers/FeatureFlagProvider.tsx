import React, { createContext, useContext, useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import { getConfig } from '../services/configService'

type FeatureConfig = {
  flags: Record<string, boolean>
  experiments: Record<string, string>
}

const FeatureFlagContext = createContext<FeatureConfig | null>(null)

export function FeatureFlagProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [config, setConfig] = useState<FeatureConfig | null>(null)

  useEffect(() => {
    async function load() {
      let userId = await SecureStore.getItemAsync('userId')

      if (!userId) {
        userId = Math.random().toString(36).substring(2)
        await SecureStore.setItemAsync('userId', userId)
      }

      const result = await getConfig(userId)

      setConfig(result)
    }

    load()
  }, [])

  return (
    <FeatureFlagContext.Provider value={config}>
      {children}
    </FeatureFlagContext.Provider>
  )
}

export function useFeatureFlagsContext() {
  return useContext(FeatureFlagContext)
}
