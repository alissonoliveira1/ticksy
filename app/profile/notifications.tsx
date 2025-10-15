import { LinearGradient } from "expo-linear-gradient";
import { goBack } from "expo-router/build/global-state/routing";
import {
  Bell,
  CalendarDays,
  ChevronLeft,
  Heart,
  Mail,
  MessageCircleMore,
  MessageSquareMore,
  Tag,
  Tickets,
} from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notification() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
      <View className="w-full ">
        <View className=" flex-row bg-transparent rounded-b-[3rem] overflow-hidden">
          <LinearGradient
            colors={["#6366F1", "#8B5CF6"]}
            className=" p-5 flex-row items-center rounded-b-[3rem] "
            style={{ flex: 1 }}
          >
            <View className="items-center justify-center pt-8 flex-1">
              <View className="absolute left-3 items-center  h-full top-6">
                <TouchableOpacity onPress={goBack} className="p-2 rounded-[4rem] bg-white/20">
                  <ChevronLeft color="#ffffff" size={24} />
                </TouchableOpacity>

              </View>
              <View className="pb-1">
                <Text className="text-white font-bold text-xl">
                  Notificações
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>

      <View className="p-2">
        <View className="bg-white p-2 w-full rounded-xl mt-10 mb-5">
          <View>
            <Text className=" text-lg text-gray-600 font-semibold">Gerencie suas preferências de notificação</Text>
          </View>
          <View>
            <View className="flex-row justify-between items-center px-1 my-3 border-b border-gray-100 pb-2">
              <View>
                <View className="bg-indigo-500/10 p-3 rounded-[20rem] ">
                  <CalendarDays color={"#6366F1"} size={25} />
                </View>
              </View>

              <View className="flex-1 pl-3">
                <View>
                  <Text className="text-gray-500 text-base font-semibold">
                    Novos Eventos
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    Notificar sobre eventos próximos a você
                  </Text>
                </View>
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

            <View className="flex-row justify-between items-center px-1 my-3 border-b border-gray-100 pb-2">
              <View>
                <View className="bg-indigo-500/10 p-3 rounded-[20rem] ">
                  <Heart color={"#6366F1"} size={25} />
                </View>
              </View>

              <View className="flex-1 pl-3">
                <View>
                  <Text className="text-gray-500 text-base font-semibold">
                    Matches
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    Quando alguém der match com você
                  </Text>
                </View>
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

            <View className="flex-row justify-between items-center px-1 my-3 border-b border-gray-100 pb-2">
              <View>
                <View className="bg-indigo-500/10 p-3 rounded-[20rem] ">
                  <MessageCircleMore color={"#6366F1"} size={25} />
                </View>
              </View>

              <View className="flex-1 pl-3">
                <View>
                  <Text className="text-gray-500 text-base font-semibold">
                    Mensagens
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    Novas mensagens de outros usuários
                  </Text>
                </View>
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

            <View className="flex-row justify-between items-center px-1 my-3 border-b border-gray-100 pb-2">
              <View>
                <View className="bg-indigo-500/10 p-3 rounded-[20rem] ">
                  <Tickets color={"#6366F1"} size={25} />
                </View>
              </View>

              <View className="flex-1 pl-3">
                <View>
                  <Text className="text-gray-500 text-base font-semibold">
                    Status dos Ingressos
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    Atualizações sobre seus ingressos
                  </Text>
                </View>
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

            <View className="flex-row justify-between items-center px-1 my-3 border-b border-gray-100 pb-2">
              <View>
                <View className="bg-indigo-500/10 p-3 rounded-[20rem] ">
                  <Tag color={"#6366F1"} size={25} />
                </View>
              </View>

              <View className="flex-1 pl-3">
                <View>
                  <Text className="text-gray-500 text-base font-semibold">
                    Ofertas e Promoções
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    Descontos e eventos especiais
                  </Text>
                </View>
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
          </View>
        </View>
         <View className="bg-white p-2 w-full rounded-xl mb-5">
          <View>
            <Text className="text-lg text-gray-600 font-semibold">Lembretes de Eventos</Text>
          </View>
          <View>
            <View className="flex-row justify-between items-center px-1 my-3 border-b border-gray-100 pb-2">
              

              <View className="flex-1 pl-3">
                <View>
                  <Text className="text-gray-500 text-base font-semibold">
                    1 semana antes
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    Lembrete para se preparar
                  </Text>
                </View>
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
            <View className="flex-row justify-between items-center px-1 my-1 border-b border-gray-100 pb-1">
             

              <View className="flex-1 pl-3">
                <View>
                  <Text className="text-gray-500 text-base font-semibold">
                    No dia do evento
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    Lembrete no dia
                  </Text>
                </View>
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
          
            
          </View>
        </View>
        <View className="bg-white p-2 w-full rounded-xl mb-5">
          <View>
            <Text className="text-lg text-gray-600 font-semibold">Canais de Notificação</Text>
          </View>
          <View>
            <View className="flex-row justify-between items-center px-1 my-3">
              <View>
                <View className="bg-indigo-500/10 p-3 rounded-[20rem] ">
                  <Bell color={"#6366F1"} size={25} />
                </View>
              </View>

              <View className="flex-1 pl-3">
                <View>
                  <Text className="text-gray-500 text-base font-semibold">
                    Novos Eventos
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    Notificar sobre eventos próximos a você
                  </Text>
                </View>
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
            <View className="flex-row justify-between items-center px-1 my-3">
              <View>
                <View className="bg-indigo-500/10 p-3 rounded-[20rem] ">
                  <Mail color={"#6366F1"} size={25} />
                </View>
              </View>

              <View className="flex-1 pl-3">
                <View>
                  <Text className="text-gray-500 text-base font-semibold">
                    Novos Eventos
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    Notificar sobre eventos próximos a você
                  </Text>
                </View>
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
            <View className="flex-row justify-between items-center px-1 my-3">
              <View>
                <View className="bg-indigo-500/10 p-3 rounded-[20rem] ">
                  <MessageSquareMore color={"#6366F1"} size={25} />
                </View>
              </View>

              <View className="flex-1 pl-3">
                <View>
                  <Text className="text-gray-500 text-base font-semibold">
                    Novos Eventos
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    Notificar sobre eventos próximos a você
                  </Text>
                </View>
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
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}
