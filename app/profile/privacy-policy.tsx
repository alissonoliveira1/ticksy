import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { goBack } from "expo-router/build/global-state/routing";
import {
  ChevronLeft,
  ChevronRight,
  Earth,
  FileText,
  Gavel,
  LockKeyhole,
  Shield,
  ShieldCheck,
  Users2,
} from "lucide-react-native";
import { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PrivacyPolicy() {
  const [selectPrivacy, setSelectPrivacy] = useState(1);
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View className="flex-1 bg-gray-50">
      <View className="w-full ">
        <View className=" flex-row bg-transparent rounded-b-[3rem] overflow-hidden">
          <LinearGradient
            colors={["#6366F1", "#8B5CF6"]}
            className=" p-5 flex-row items-center rounded-b-[3rem] "
            style={{ flex: 1 }}
          >
            <View className="items-center justify-center pt-8  flex-1">
              <View className="absolute left-3 items-center  h-full top-6">
                <TouchableOpacity
                  onPress={goBack}
                  className="p-2 rounded-[4rem] bg-white/20"
                >
                  <ChevronLeft color="#ffffff" size={24} />
                </TouchableOpacity>
              </View>
              <View className="pb-1 ">
                <Text className="text-white font-bold text-xl">
                  Politica de Privacidade
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
      <View className=" mt-6 bg-white p-2">
        <View>
          <Text className="text-gray-600 text-lg font-semibold  my-3">
            Visibilidade do Perfil
          </Text>
        </View>
        <View className="flex-row w-full items-center gap-2 ">
          <TouchableOpacity activeOpacity={1} onPress={()=>setSelectPrivacy(1)} className={`flex-1 items-center border ${selectPrivacy === 1 ? "bg-indigo-500" : "bg-gray-100"} border-gray-200 p-2 rounded-lg `}>
            <Earth color={selectPrivacy === 1 ? "#fff" : "#6b7280"} size={20} />
            <Text className={`font-semibold text-base pt-2 ${selectPrivacy === 1 ? "text-white" : "text-gray-500"}`}>Público</Text>
            <Text className={`text-gray-500 text-sm ${selectPrivacy === 1 ? "text-white" : "text-gray-500"} `}>Todos podem ver</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={()=>setSelectPrivacy(2)} className={`flex-1 items-center border ${selectPrivacy === 2 ? "bg-indigo-500" : "bg-gray-100"} border-gray-200 p-2 rounded-lg `}>
            <LockKeyhole color={selectPrivacy === 2 ? "#fff" : "#6b7280"} size={20} />
            <Text className={`font-semibold text-base pt-2 ${selectPrivacy === 2 ? "text-white" : "text-gray-500"}`}>Privado</Text>
            <Text className={`text-gray-500 text-sm ${selectPrivacy === 2 ? "text-white" : "text-gray-500"} `}>Apenas você</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={()=>setSelectPrivacy(3)} className={`flex-1 items-center border ${selectPrivacy === 3 ? "bg-indigo-500" : "bg-gray-100"} border-gray-200 p-2 rounded-lg `}>
            <Users2 color={selectPrivacy === 3 ? "#fff" : "#6b7280"} size={20} />
            <Text className={`font-semibold text-base pt-2 ${selectPrivacy === 3 ? "text-white" : "text-gray-500"}`}>Conexões</Text>
            <Text className={` text-sm ${selectPrivacy === 3 ? "text-white" : "text-gray-500"} `}>Apenas conexões</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="bg-white mt-5 p-3 rounded-md">
        <View>
          <Text className="text-gray-600 text-lg font-semibold  my-3">
            Segurança da Conta
          </Text>
        </View>
          <View className="flex-row justify-between px-3 bg-white items-center rounded-md my-4">
        <View>
          <MaterialIcons name="lock-reset" size={24} color="#6366f1" />
        </View>
        <View className="flex-1 pl-4">
          <Text className="text-gray-500 text-base font-semibold">
            Alterar senha
          </Text>
          
        </View>

        <View>
        <ChevronRight color={"#6b7280"} size={24} />
        </View>
      </View>
       <View className="flex-row justify-between px-3 bg-white items-center rounded-md my-4">
        <View>
          <ShieldCheck size={24} color="#6366f1" />
        </View>
        <View className="flex-1 pl-4">
          <Text className="text-gray-500 text-base font-semibold">
            Autenticação de Dois Fatores
          </Text>
          <Text className="text-gray-400 text-sm">Adicione uma camada extra de segurança</Text>
        </View>

        <View>
        <Switch
                  thumbColor={"#ffffff"}
                  trackColor={{ false: "#d1d5db", true: "#6366f1" }}
                  value={isEnabled}
                  onValueChange={setIsEnabled}
                />
        </View>
      </View>
       <View className="flex-row justify-between px-3 bg-white items-center rounded-md my-4">
        <View>
          <MaterialIcons name="lock-reset" size={24} color="#6366f1" />
        </View>
        <View className="flex-1 pl-4">
          <Text className="text-gray-500 text-base font-semibold">
            Dispositivos Conectados
          </Text>
          <Text className="text-gray-400 text-sm">Gerencie sessões ativas</Text>
        </View>

        <View>
        <ChevronRight color={"#6b7280"} size={24} />
        </View>
      </View>
      </View>
      <View className="flex-col mt-5 p-3 gap-2">
        <View className="gap-2 flex-row items-center">
          <FileText color={"#6366F1"} size={12} />
          <Text className="text-indigo-500 text-xs font-semibold">
            Politica de Privacidade
          </Text>
        </View>
        <View className="gap-2 flex-row items-center">
          <Gavel color={"#6366F1"} size={12} />
          <Text className="text-indigo-500 text-xs font-semibold">
            Termos de Uso
          </Text>
        </View>
        <View className="gap-2 flex-row items-center">
          <Shield color={"#6366F1"} size={12} />
          <Text className="text-indigo-500 text-xs font-semibold">
           
            Politica de Cookies
          </Text>
        </View>
      </View>
    </View>
  );
}
