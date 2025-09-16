import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function StatusBarUi() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#fff" }}>StatusBar personalizada</Text>
      <StatusBar style="light" backgroundColor="#121212" />
    </View>
  );
}
