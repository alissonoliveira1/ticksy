import {
    Avatar,
    AvatarBadge,
    AvatarFallbackText,
    AvatarImage,
} from "@/components/ui/avatar";
import { Event } from "@/schemas/TicketSchamas";
import { EventService } from "@/services/eventServices";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Building2, CalendarDays, Check, ChevronRight, MapPin } from "lucide-react-native";
import { useEffect, useState } from "react";
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function TicketDetails() {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useLocalSearchParams<{ id: string }>();
  useEffect(() => {
    if (!id) return;

    const fetchEvent = async () => {
      try {
        const data = await EventService.getById(id);
        setEvent(data);
      } catch (error) {
        console.error("Erro ao buscar evento:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);
  if (
    event?.availableTickets === undefined ||
    event?.totalTickets === undefined
  )
    return null;
  const availability = (event?.availableTickets / event?.totalTickets) * 100;
  const date2 = new Date(event?.date || "");
  const date = date2.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log(event);
  console.log("ID do evento:", id);
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {loading ? <Text>Loading...</Text> : null}

          <View className="w-full h-auto ">
            <Image
              style={{ width: width, height: 220 }}
              className="object-cover"
              source={event?.image}
            />
          </View>
          <View className="bg-white rounded-[2rem] p-4 w-full relative bottom-7 shadow-xl">
            <View>
              <Text className="text-gray-900 font-bold text-xl">
                {event?.title}
              </Text>
            </View>
            <View className="py-2 pb-4">
              <Text className="text-gray-500 font-normal">
                {event?.description}
              </Text>
            </View>
            <View className="py-2 flex-row items-center ">
              <View className="px-3  rounded-full">
                <CalendarDays color="#6366F1" size={20} />
              </View>
              <View className="gap-1 ">
                <View className="">
                  <Text className="text-gray-400 font-semibold">Data</Text>
                </View>
                <View className="">
                  <Text className="text-gray-700 font-semibold">{date}</Text>
                </View>
                <View className="">
                  <Text className="text-gray-400 font-semibold">
                    {event?.time}
                  </Text>
                </View>
              </View>
            </View>
            <View className=" py-2 flex-row items-center ">
              <View className="px-3 ">
                <MapPin color="#6366F1" size={20} />
              </View>
              <View className="gap-1 ">
                <View className="">
                  <Text className="text-gray-400 font-semibold">Local</Text>
                </View>
                <View className="">
                  <Text className="text-gray-700 font-semibold">
                    {event?.venue}
                  </Text>
                </View>
                <View className="flex-row  items-center ">
                  <View style={{width: width/1.3}} className="  ">
                    <Text className="text-gray-400 font-semibold">
                    {event?.address}
                  </Text>
                  </View>
                  
                </View>
              </View>
              <View>
                    <ChevronRight color={'black'} size={20} />
                  </View>
            </View>
            <View className=" py-2 flex-row items-center ">
              <View className="px-3  rounded-full">
                <Building2 color="#6366F1" size={20} />
              </View>
              <View className="gap-1 ">
                <View className="">
                  <Text className="text-gray-400 font-semibold">
                    Organizador
                  </Text>
                </View>
                <View className="">
                  <Text className="text-gray-700 font-semibold">
                    {event?.organizer}
                  </Text>
                </View>
              </View>
            </View>
            <View className="pt-6 mb-2">
              <View>
                <Text className="text-gray-600 font-bold text-lg ">
                  Quem vai?
                </Text>
              </View>
              <View className="flex-row space-x-3 py-2">
                <Avatar size="md">
                  <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                  <AvatarImage
                    source={{
                      uri: "https://i.ibb.co/mC3m3gFF/00100s-PORTRAIT-00100-BURST20220226153400411-COVER.jpg",
                    }}
                  />
                  <AvatarBadge />
                </Avatar>
              </View>
            </View>
            <View className="pt-6 mb-2">
              <View>
                <Text className="text-gray-600 font-bold text-lg ">
                  Escolha seu Ingressos
                </Text>
              </View>
              <View>
                <TouchableOpacity className="bg-gray-50 rounded-2xl p-4 mt-2 ">
                  <View>
                    <Text className="text-gray-700 font-semibold text-xl">
                      Ingresso Pista
                    </Text>
                  </View>
                  <View>
                    <Text className="text-indigo-500 font-extrabold text-2xl">
                      {event?.price.currency} {event?.price.min},00
                    </Text>
                  </View>
                  <View>
                    <View>
                      <Text className="text-gray-500">
                        Entrada geral com acesso completo ao evento
                      </Text>
                    </View>
                    <View className="py-2 gap-1">
                      <View className="flex-row gap-2 items-center">
                        <Check color={"green"} size={16} />
                        <Text className="font-semibold text-gray-600">
                          Acesso ao evento
                        </Text>
                      </View>
                      <View className="flex-row gap-2 items-center">
                        <Check color={"green"} size={16} />
                        <Text className="font-semibold text-gray-600">
                          Arena pista
                        </Text>
                      </View>
                      <View className="flex-row gap-2 items-center">
                        <Check color={"green"} size={16} />
                        <Text className="font-semibold text-gray-600">
                          banheiros
                        </Text>
                      </View>
                    </View>
                     <View className="mt-6" >
                        <View style={styles.progressBar}>
                          <View
                            style={[
                              styles.progressFill,
                              {
                                width: `${availability}%`,
                                backgroundColor:'#34D399',
                              },
                            ]}
                          />
                        </View>
                        <Text
                          className="text-gray-500 text-sm font-semibold text-center"
                        >
                          {event.availableTickets} de {event.totalTickets} disponíveis
                        </Text>
                      </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity className="bg-gray-50 rounded-2xl p-4 mt-2 ">
                  <View>
                    <Text className="text-gray-700 font-semibold text-xl">
                      Ingresso Vip
                    </Text>
                  </View>
                  <View>
                    <Text className="text-indigo-500 font-extrabold text-2xl">
                      {event?.price.currency} {event?.price.max},00
                    </Text>
                  </View>
                  <View>
                    <View>
                      <Text className="text-gray-500">
                        Experiencia vip com beneficios exclusivo
                      </Text>
                    </View>
                    <View className="py-2 gap-1">
                      <View className="flex-row gap-2 items-center">
                        <Check color={"green"} size={16} />
                        <Text className="font-semibold text-gray-600">
                          Acesso ao evento
                        </Text>
                      </View>
                      <View className="flex-row gap-2 items-center">
                        <Check color={"green"} size={16} />
                        <Text className="font-semibold text-gray-600">
                          Arena Vip
                        </Text>
                      </View>
                      <View className="flex-row gap-2 items-center">
                        <Check color={"green"} size={16} />
                        <Text className="font-semibold text-gray-600">
                          Bar exclusivo
                        </Text>
                      </View>
                      <View className="flex-row gap-2 items-center">
                        <Check color={"green"} size={16} />
                        <Text className="font-semibold text-gray-600">
                          Estacionamento gratis
                        </Text>
                      </View>
                    </View>
                     <View className="mt-6" >
                        <View style={styles.progressBar}>
                          <View
                            style={[
                              styles.progressFill,
                              {
                                width: `${availability}%`,
                                backgroundColor:'#FBBF24',
                              },
                            ]}
                          />
                        </View>
                        <Text
                          className="text-gray-500 text-sm font-semibold text-center"
                        >
                          {event.availableTickets} de {event.totalTickets} disponíveis
                        </Text>
                      </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity className="bg-gray-50 rounded-2xl p-4 mt-2 ">
                  <View>
                    <Text className="text-gray-700 font-semibold text-xl">
                      Ingresso Premium
                    </Text>
                  </View>
                  <View>
                    <Text className="text-indigo-500 font-extrabold text-2xl">
                      {event?.price.currency} {event?.price.premium},00
                    </Text>
                  </View>
                  <View>
                    <View>
                      <Text className="text-gray-500">
                        Experiencia premium com beneficios exclusivo
                      </Text>
                    </View>
                    <View className="py-2 gap-1">
                      <View className="flex-row gap-2 items-center">
                        <Check color={"green"} size={16} />
                        <Text className="font-semibold text-gray-600">
                          Acesso ao evento
                        </Text>
                      </View>
                      <View className="flex-row gap-2 items-center">
                        <Check color={"green"} size={16} />
                        <Text className="font-semibold text-gray-600">
                          Arena premium
                        </Text>
                      </View>
                      <View className="flex-row gap-2 items-center">
                        <Check color={"green"} size={16} />
                        <Text className="font-semibold text-gray-600">
                          Open Bar & Open food
                        </Text>
                      </View>
                      <View className="flex-row gap-2 items-center">
                        <Check color={"green"} size={16} />
                        <Text className="font-semibold text-gray-600">
                          Lembranças exclusivas
                        </Text>
                      </View>
                      <View className="flex-row gap-2 items-center">
                        <Check color={"green"} size={16} />
                        <Text className="font-semibold text-gray-600">
                          Estacionamento gratis
                        </Text>
                      </View>
                      <View className="mt-6" >
                        <View style={styles.progressBar}>
                          <View
                            style={[
                              styles.progressFill,
                              {
                                width: `${availability}%`,
                                backgroundColor:'#A78BFA',
                              },
                            ]}
                          />
                        </View>
                        <Text
                          className="text-gray-500 text-sm font-semibold text-center"
                        >
                          {event.availableTickets} de {event.totalTickets} disponíveis
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

          
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
      progressBar: {
    height: 4,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 2,
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
})