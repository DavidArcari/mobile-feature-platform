import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { FeatureFlagProvider } from '../src/providers/FeatureFlagProvider'
import 'react-native-reanimated'

export const unstable_settings = {
  anchor: '(tabs)'
}

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <FeatureFlagProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{ presentation: 'modal', title: 'Modal' }}
          />
          <StatusBar style="auto" />
        </Stack>
      </FeatureFlagProvider>
    </ThemeProvider>
  )
}
