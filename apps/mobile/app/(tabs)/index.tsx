import { View, Text } from 'react-native'
import { useFeature } from '../../src/hooks/useFeature'
import { useExperiment } from '../../src/hooks/useExperiment'
import { Button } from 'react-native'
import { trackConversion } from '../../src/services/conversionService'

function DashboardA({ enabled }: { enabled: boolean }) {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: '#222',
        borderRadius: 10,
        marginBottom: 20
      }}
    >
      <Text style={{ color: 'white', fontSize: 18 }}>Dashboard Variant A</Text>

      <Text style={{ color: '#ccc' }}>
        New Dashboard enabled: {String(enabled)}
      </Text>
    </View>
  )
}

function DashboardB({ enabled }: { enabled: boolean }) {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: '#2a2a40',
        borderRadius: 10,
        marginBottom: 20
      }}
    >
      <Text style={{ color: 'white', fontSize: 22 }}>
        🚀 Dashboard Variant B
      </Text>

      <Text style={{ color: '#aaa' }}>
        New Dashboard enabled: {String(enabled)}
      </Text>
    </View>
  )
}

export default function Home() {
  const newDashboard = useFeature('newDashboard')
  const variant = useExperiment('dashboardLayout')

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#111',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {variant === 'A' ? (
        <DashboardA enabled={newDashboard} />
      ) : (
        <DashboardB enabled={newDashboard} />
      )}

      <Text style={{ color: 'white' }}>Current experiment: {variant}</Text>
      <Button
        title="Simular conversão"
        onPress={() => trackConversion('dashboard_clicked')}
      />
    </View>
  )
}
