import { Text, View, StyleSheet } from 'react-native'
import { useFeatureFlags } from '../../src/hooks/useFeatureFlags'

export default function HomeScreen() {
  const config = useFeatureFlags()

  if (!config) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading config...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feature Flags Demo</Text>

      <Text style={styles.text}>
        New Dashboard: {String(config.flags.newDashboard)}
      </Text>

      <Text style={styles.text}>Payments: {String(config.flags.payments)}</Text>

      <Text style={styles.text}>
        New Theme: {String(config.flags.newTheme)}
      </Text>

      <Text style={styles.text}>
        Experiment Variant: {config.experiments.dashboardLayout}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    color: 'white'
  }
})
