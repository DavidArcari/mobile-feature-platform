import { View, Text } from 'react-native'
import { useFeature } from '../../src/hooks/useFeature'
import { useExperiment } from '../../src/hooks/useExperiment'
import { Button } from 'react-native'
import { trackConversion } from '../../src/services/conversionService'
import { OldDashboard } from '../../src/components/OldDashboard'
import { NewDashboard } from '../../src/components/NewDashboard'

export default function Home() {
  const variant = useExperiment('dashboardLayout')
  const newDashboard = useFeature('newDashboard')

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#111',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {newDashboard ? <NewDashboard /> : <OldDashboard />}

      <Text style={{ color: 'white' }}>Current experiment: {variant}</Text>
      <Button
        title="Simular conversão"
        onPress={() => trackConversion('dashboard_clicked')}
      />
    </View>
  )
}
