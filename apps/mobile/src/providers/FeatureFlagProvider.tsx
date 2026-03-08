import React, { createContext, useContext, useEffect, useState } from "react"
import { getConfig } from "../services/configService"

type FeatureConfig = {
  flags: Record<string, boolean>
  experiments: Record<string, string>
}

const FeatureFlagContext = createContext<FeatureConfig | null>(null)

export function FeatureFlagProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<FeatureConfig | null>(null)

  useEffect(() => {
    async function load() {
      const result = await getConfig()
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