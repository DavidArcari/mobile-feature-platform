import { View, Text } from 'react-native'

export function NewDashboard() {
  return (
    <View
      style={{
        padding: 24,
        backgroundColor: '#1f2937',
        borderRadius: 12,
        marginBottom: 20
      }}
    >
      <Text style={{ color: 'white', fontSize: 22, fontWeight: '600' }}>
        🚀 New Dashboard (OTA)
      </Text>

      <Text style={{ color: '#d1d5db', marginTop: 6 }}>
        Esta versão veio via OTA + Feature Flag
      </Text>
      {/* <Text style={{ color: '#d1d5db', marginTop: 6 }}>🚀 New Dashboard OTA v2</Text> */}
    </View>
  )
}
