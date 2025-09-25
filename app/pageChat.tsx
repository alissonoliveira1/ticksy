import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PageChat() {
    return (
        <SafeAreaView className="flex-1">
                  <StatusBar style="light" backgroundColor="#6366F1" translucent={false} />
            <Text>
                Page Chat
            </Text>
        </SafeAreaView>
    )
}