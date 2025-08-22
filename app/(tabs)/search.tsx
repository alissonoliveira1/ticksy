import { StatusBar } from "expo-status-bar";
import { SearchIcon } from "lucide-react-native";
import { Platform, StatusBar as RNStatusBar, SafeAreaView, Text, TextInput, View } from "react-native";
import { Category } from "../../components/ui/category";

export default function Search() {
  const STATUS_BAR_HEIGHT =
    Platform.OS === "android" ? RNStatusBar.currentHeight : 44;


  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="bg-indigo-500" style={{ height: STATUS_BAR_HEIGHT }} />
            <StatusBar style="light" />
      <View className="p-3">
        <Text className="text-xl font-semibold text-gray-800">Pesquisa</Text>
      </View>
      <View className="w-full p-4">
        <View className=" flex-row items-center rounded-2xl border h-auto px-3 overflow-hidden border-gray-400">
          <SearchIcon size={20} color={"#000000"} />
          <TextInput className=" h-11 flex-1   rounded-lg text-base leading-10 " />
        </View>
      </View>
      <View>
        <Category  />
      </View>
      <View>

      </View>
    </SafeAreaView>
  );
}
