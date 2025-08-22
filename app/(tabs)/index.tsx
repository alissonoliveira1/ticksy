import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { StatusBar } from "expo-status-bar";
import { SearchIcon } from "lucide-react-native";
import {
  Platform,
  StatusBar as RNStatusBar,
  SafeAreaView,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const STATUS_BAR_HEIGHT =
    Platform.OS === "android" ? RNStatusBar.currentHeight : 44;
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
     
      <View className="bg-indigo-500" style={{ height: STATUS_BAR_HEIGHT }} />
      <StatusBar style="light" />
      <View className="w-full p-4">
        <View className=" flex-row">
          <View className=" flex-row flex-1 items-center rounded-2xl border h-auto px-3 overflow-hidden border-gray-400">
            <SearchIcon size={20} color={"#000000"} />
            <TextInput className=" h-11 flex-1   rounded-lg text-base leading-10 " />
          </View>
         <View className="ml-2">
           <Avatar size="md">
      <AvatarFallbackText  >Jane Doe</AvatarFallbackText>
      <AvatarImage
        source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
      <AvatarBadge />
    </Avatar>
         </View>
        </View>
      </View>
      <View>
     
      </View>
    </SafeAreaView>
  );
}
