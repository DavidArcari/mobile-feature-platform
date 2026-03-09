import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { FeatureFlagProvider } from '../src/providers/FeatureFlagProvider'
import { useOTAUpdate } from '../src/hooks/useOTAUpdate'
import 'react-native-reanimated'

export const unstable_settings = {
  anchor: '(tabs)'
}

export default function RootLayout() {
  useOTAUpdate()

  return (
    <ThemeProvider value={DarkTheme}>
      <FeatureFlagProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </FeatureFlagProvider>
    </ThemeProvider>
  )
}
