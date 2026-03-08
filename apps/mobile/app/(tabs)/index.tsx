import { View, Text } from "react-native"
import { useFeature } from "../../src/hooks/useFeature"
import { useExperiment } from "../../src/hooks/useExperiment"

export default function Home() {
  const newDashboard = useFeature("newDashboard")
  const variant = useExperiment("dashboardLayout")

  console.log("New Dash -> ", String(newDashboard))
  console.log("Variant -> ", variant)

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 20 }}>
        New Dashboard enabled: {String(newDashboard)}
      </Text>

      <Text style={{ color: "white", fontSize: 20 }}>
        Experiment: {variant}
      </Text>
    </View>
  )
}