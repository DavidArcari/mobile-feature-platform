import { useEffect } from 'react'
import * as Updates from 'expo-updates'

export function useOTAUpdate() {
  useEffect(() => {
    async function checkUpdate() {
      try {
        const update = await Updates.checkForUpdateAsync()

        if (update.isAvailable) {
          await Updates.fetchUpdateAsync()
          await Updates.reloadAsync()
        }
      } catch (error) {
        console.log('OTA update error:', error)
      }
    }

    checkUpdate()
  }, [])
}
