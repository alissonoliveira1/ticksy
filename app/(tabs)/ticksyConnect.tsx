import { ConnectUi } from "@/components/ui/ConnectUi";
import { Input, InputField } from "@/components/ui/input";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Calendar, Heart, SearchIcon, Users } from "lucide-react-native";
import { Platform, StatusBar as RNStatusBar, SafeAreaView, Text, View } from "react-native";
export default function TicksyConnect() {
     const STATUS_BAR_HEIGHT =
        Platform.OS === "android" ? RNStatusBar.currentHeight : 44;
    return (
    <SafeAreaView>
         <View className="bg-indigo-500" style={{ height: STATUS_BAR_HEIGHT }} />
        <StatusBar style="auto" />
          <View className="w-full">
          <View className=" flex-row rounded-b-[3rem] overflow-hidden">
            <LinearGradient
              colors={["#6366F1", "#8B5CF6"]}
              className=" p-5 flex-row items-center rounded-b-[3rem] "
              style={{ flex: 1 }}
            >
             
              <View className="items-center justify-center flex-1">
                <View>
                    <Text className="text-white font-bold text-xl">Ticksy Connect</Text>
                </View>
              </View>
            </LinearGradient >
          </View>
        </View>
        <View className="w-full px-4 mt-4">
          <View className="">
              <Input
              className="border  "
      variant="outline"
      size="lg"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
        <View className="pl-2">
            <SearchIcon  size={20} color={"#99A1AF"} />
        </View>
      <InputField placeholder="Pesquisar pessoas..." />
    </Input>
          </View>
        </View>
        <View className="py-2">
            <ConnectUi/>
        </View>
         <View className=" w-full h-auto">
          <View className=" w-full  h-52    overflow-hidden">
            <LinearGradient
              colors={["#6366F1", "#8B5CF6"]}
              className=" p-3 justify-around  "
              style={{ flex: 1 }}
            >
              <View className="w-8/12">
                <Text className="text-2xl text-white font-bold">
                  Descubra & Conecte
                </Text>
                <Text className="text-sm text-gray-100  font-normal">
                  Encontre eventos incríveis e pessoas que compartilham suas
                  paixões
                </Text>
              </View>

              <View className=" gap-2 flex-row flex-1 items-center justify-around">
                <View className="flex-1 text-white p-2 items-center justify-center bg-white/15 rounded-2xl ">
                  <Calendar size={16} color={"yellow"} />
                  <View className=" items-center justify-center pt-1 ">
                    <Text className="text-white font-semibold text-sm">8</Text>
                    <Text className="text-white font-semibold text-sm">
                      Eventos
                    </Text>
                  </View>
                </View>
                <View className="flex-1 p-2  items-center justify-center bg-white/15 rounded-2xl">
                  <Heart size={16} color={"red"} />
                  <View className=" items-center justify-center pt-1 ">
                    <Text className="text-white font-semibold text-sm">8</Text>
                    <Text className="text-white font-semibold text-sm">
                      Matches
                    </Text>
                  </View>
                </View>
                <View className="flex-1 p-2  items-center justify-center bg-white/15 rounded-2xl">
                  <Users size={16} color={"blue"} />
                  <View className=" items-center justify-center pt-1 ">
                    <Text className="text-white font-semibold text-sm">8</Text>
                    <Text className="text-white font-semibold text-sm">
                      Amigos
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
        
        </SafeAreaView>
);
}