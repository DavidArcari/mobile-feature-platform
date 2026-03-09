import { useEffect } from 'react'
import * as Updates from 'expo-updates'

export function useOTAUpdate() {
  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        const update = await Updates.checkForUpdateAsync()

        if (update.isAvailable) {
          await Updates.fetchUpdateAsync()
          await Updates.reloadAsync()
        }
      } catch (error) {
        console.log(error)
      }
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])
}
