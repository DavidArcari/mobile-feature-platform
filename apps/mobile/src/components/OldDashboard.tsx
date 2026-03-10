import { View, Text } from 'react-native'

export function OldDashboard() {
  return (
    <View
      style={{
        padding: 24,
        backgroundColor: '#111827',
        borderRadius: 12,
        marginBottom: 20
      }}
    >
      <Text style={{ color: 'white', fontSize: 18 }}>Old Dashboard</Text>

      <Text style={{ color: '#9ca3af' }}>Versão antiga da tela</Text>

      {/* <Text style={{ color: '#d1d5db', marginTop: 6 }}>*** - OLD DASHBOARD OTA TEST - ***</Text> */}
    </View>
  )
}
