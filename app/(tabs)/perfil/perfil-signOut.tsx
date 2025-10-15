import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { User, UserCircle } from "lucide-react-native";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function PerfilSignOut() {
  return (
    <View className="flex-1 bg-gray-50">
      <LinearGradient
        colors={["#667eea", "#764ba2", "#667eea"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1, width: windowWidth, height: windowHeight }}
      >
        <View className="pt-16 gap-2 pb-6 items-center justify-center">
          <Text className="text-white font-bold text-5xl">Ticksy</Text>
          <Text className="text-xs text-gray-200">
            Conecte-se através de eventos incríveis
          </Text>
        </View>

        <View className="w-full  mt-16  items-center justify-center">
          <View className="w-full h-52 ">
            <Image
              style={{ width: "100%", height: "100%" }}
              contentFit="contain"
              source={require("../../../assets/images/ticksy_Ticksy.png")}
            />
          </View>
          <View className="w-full justify-center items-center ">
            <View className=" mt-6  py-3 bg-white border rounded-2xl w-10/12">
              <Text className="text-gray-600 text-center font-semibold text-sm">
                Olá! Vamos descobrir eventos incríveis juntos? 🎉
              </Text>
            </View>
          </View>
        </View>
        <View className="w-full  mt-10  items-center justify-center">
          <TouchableOpacity className="w-11/12 gap-5 flex-row bg-white rounded-2xl p-4 mt-10 items-center justify-center">
            <View className="w-7 h-7 ">
              <Image
                style={{ width: "100%", height: "100%" }}
                contentFit="contain"
                source={require("@/assets/images/googleIcon.png")}
              />
            </View>
            <Text className="text-black font-bold text-lg">
              Continuar com o Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-11/12 gap-5 flex-row  bg-white rounded-2xl p-4 mt-4 items-center justify-center">
           <View className="w-7 h-7 ">
              <Image
                style={{ width: "100%", height: "100%" }}
                contentFit="contain"
                source={require("@/assets/images/facebookIcon.png")}
              />
            </View>
            <Text className="text-black font-bold text-lg">Continuar com o Facebook</Text>
          </TouchableOpacity>
        </View>
       <View className="w-full  mt-10  items-center justify-center">
         <View className="w-11/12 flex-row items-center justify-center">
        <View className="flex-1 h-[2px]  bg-gray-50/10"></View>
        <View className="px-1"><Text className="text-gray-100">Ou</Text></View>
        <View className="flex-1 h-[2px]  bg-gray-50/10"></View>
        </View>
       </View>
       <View className="w-full  mt-5  items-center justify-center">
         <TouchableOpacity className="w-11/12  gap-5 flex-row  border border-white rounded-2xl p-4 mt-4 items-center justify-center">
           <View className="w-7 h-7 ">
             <UserCircle size={28} color={"white"} />
            </View>
            <Text className="text-white font-bold text-lg">Criar conta</Text>
          </TouchableOpacity>
       </View>
      </LinearGradient>
    </View>
  );
}
