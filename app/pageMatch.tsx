import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ArrowLeft, Heart, MessageCircle, Star, X } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function PageMatch() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (

     
      <View className="flex-1 bg-gray-50"> 
      <StatusBar style="light" backgroundColor="#6366F1" translucent={false} />
        <View className="w-full h-32 z-10 overflow-hidden absolute top-0">
          <LinearGradient
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 10,
            }}
            colors={["rgb(99, 102, 241.6)", "transparent"]}
          />
          <View className="absolute w-full flex-row justify-between px-3 top-10  z-30">
            <View>
              <TouchableOpacity
                className="rounded-full p-2 bg-indigo-800"
                onPress={() => router.back()}
              >
                <ArrowLeft size={30} color="white" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                className="rounded-full p-2 bg-indigo-800 "
                onPress={() =>
                  router.push({ pathname: "/pageChat", params: { id } })
                }
              >
                <MessageCircle size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="absolute w-full h-full justify-center items-center z-20">
            <Text className="text-white text-3xl font-bold">Connect</Text>
          </View>
        </View>

        <View className="flex-1 w-full h-96 relative z-0">
          <Image
            source={{ uri: "https://i.ibb.co/bgc01Xsw/jovem.jpg" }}
            style={{ width: "100%", height: "100%" }}
          />
          <View className="w-full h-80 justify-center items-center overflow-hidden absolute bottom-0">
            
            <LinearGradient
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 10,
              }}
              colors={["transparent", "rgb(99, 102, 241.6)"]}
            />
            <View className="w-full h-40 justify-start items-start p-3 absolute bottom-40 ">
              <View className="flex-row ">
                <Text className="text-4xl text-white font-bold">Ytalo</Text>
                <Text className="text-4xl text-white f">, 27</Text>
              </View>

              <View className="flex-row items-center relative z-30 gap-2 mt-2">
                <Heart size={20} color="yellow" fill="yellow" />
                <Heart size={20} color="yellow" fill="yellow" />
                <Heart size={20} color="yellow" fill="yellow" />
                <Heart size={20} color="yellow" fill="yellow" />
                <Heart size={20} color="gray" fill="gray" />
              </View>
              <View className="relative z-40 pt-2">
                <Text className="text-white text-base font-semibold ">
                  Software developer. Love music and tech events. Always up for
                  a good time!
                </Text>
              </View>
              <View className="flex-row gap-3 relative z-30 pt-2">
                <View className="bg-white/20 rounded-full justify-center items-center px-3 py-1">
                  <Text className="text-white text-sm font-semibold">
                    Vinhos
                  </Text>
                </View>
                <View className="bg-white/20 rounded-full justify-center items-center px-3 py-1">
                  <Text className="text-white text-sm font-semibold ">
                    Musicas
                  </Text>
                </View>
                <View className="bg-white/20 rounded-full justify-center items-center px-3 py-1">
                  <Text className="text-white text-sm font-semibold">
                    Praia
                  </Text>
                </View>
                <View className="bg-white/20 rounded-full justify-center items-center px-3 py-1">
                  <Text className="text-white text-sm font-semibold">
                    Livros
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="absolute w-full flex-row justify-evenly bottom-10  z-20">
            <TouchableOpacity
              className="p-4 bg-indigo-800 rounded-full"
              onPress={() => router.back()}
            >
              <X size={35} color="red" />
            </TouchableOpacity>
            <TouchableOpacity
              className="p-4 bg-indigo-800 rounded-full"
              onPress={() => router.back()}
            >
              <Star
                size={35}
                color="rgb(99, 102, 241.6)"
                fill={"rgb(99, 102, 241)"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
   
  );
}
