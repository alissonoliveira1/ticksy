import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { CalendarDays, MapPin, QrCode } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const tickets = [
  {
    id: "1",
    title: "Show de Rock",
    date: "2025-10-11",
    location: "Parque da Cidade",
    ticketType: "VIP",
    price: "120,00",
    time: "21:00",
    qrCode: "",
    status: "valid" as const,
    seat: "A12",
  },
  {
    id: "2",
    title: "Peça de Teatro",
    date: "2025-15-11",
    location: "Parque exposições",
    ticketType: "VIP",
    price: "80,00",
    time: "21:00",
    qrCode: "",
    status: "valid" as const,
    seat: "B34",
  },
  {
    id: "3",
    title: "Show do Lafuria",
    date: "2025-06-15",
    location: "Parque exposições",
    ticketType: "VIP",
    price: "80,00",
    time: "21:00",
    qrCode: "",
    status: "valid" as const,
    seat: "B34",
  },
  {
    id: "4",
    title: "Turne Pirata",
    date: "2023-20-12",
    location: "Parque exposições",
    ticketType: "VIP",
    price: "80,00",
    time: "21:00",
    qrCode: "",
    status: "valid" as const,
    seat: "B34",
  },
];
export default function MyTicket() {
  const date = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case "valid":
        return "bg-teal-500";
      case "used":
        return "bg-neutral-500";
      case "expired":
        return "bg-red-600";
      default:
        return "bg-neutral-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "valid":
        return "Valido";
      case "used":
        return "Utilizado";
      case "expired":
        return "Expirado";
      default:
        return "Incomum";
    }
  };

  return (
    <SafeAreaView className="flex-1  bg-white">
      <StatusBar style="light" backgroundColor="#6366F1" translucent={false} />
      <ScrollView className="" showsVerticalScrollIndicator={false}>
        <View className="w-full">
          <View className=" flex-row rounded-b-[3rem] overflow-hidden">
            <LinearGradient
              colors={["#6366F1", "#8B5CF6"]}
              className=" p-5 flex-row items-center rounded-b-[3rem] "
              style={{ flex: 1 }}
            >
              <View className="items-center justify-center flex-1">
                <View>
                  <Text className="text-white font-bold text-xl">
                    Meus ingressos
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>

        <View
          className="flex-col
    gap-4 mt-4 px-4"
        >
          {tickets.map((ticket) => (
            <TouchableOpacity
              key={ticket.id}
              className="w-full h-auto rounded-2xl overflow-hidden"
            >
              <LinearGradient
                colors={["#6366F1", "#8B5CF6"]}
                className="w-full h-auto rounded-2xl   p-3 "
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View className="w-full h-auto blur-sm rounded-2xl p-3 bg-white/10">
                  <View className="flex-row justify-between ">
                    <View>
                      <Text className="text-white text-xl line-clamp-1 w-60 font-bold pb-2">
                        {ticket.title}
                      </Text>
                      <View className="flex-row items-center pb-1.5">
                        <View className="pr-1">
                          <CalendarDays size={15} color={"white"} />
                        </View>
                        <View>
                          <Text className="text-white text-sm">
                            {date(ticket.date)}
                          </Text>
                        </View>
                      </View>
                      <View className="flex-row items-center ">
                        <View className="pr-1">
                          <MapPin size={15} color={"white"} />
                        </View>
                        <View>
                          <Text className="text-white text-sm">
                            {ticket.location}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <View
                        className={`${getStatusColor(
                          ticket.status
                        )} w-auto px-2 py-1 rounded-full`}
                      >
                        <Text className="text-white text-xs">
                          {getStatusText(ticket.status)}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View className="w-full flex-row justify-center items-center mt-2">
                    <View className="w-4 bg-white h-4 rounded-full"></View>
                    <View
                      style={{ height: 1 }}
                      className=" flex-1 bg-white/10 "
                    ></View>
                    <View className="w-4 bg-white h-4 rounded-full"></View>
                  </View>

                  <View className="flex-row justify-between items-center ">
                    <View className="flex-1">
                      <View className="flex-row justify-between mt-2">
                        <View>
                          <Text className="text-white text-sm">
                            Tipo de ingresso:
                          </Text>
                        </View>
                        <View>
                          <Text className="text-white text-sm font-bold">
                            {ticket.ticketType}
                          </Text>
                        </View>
                      </View>
                      <View className="flex-row justify-between mt-2">
                        <View>
                          <Text className="text-white text-sm">Preço:</Text>
                        </View>
                        <View>
                          <Text className="text-white text-sm font-bold">
                            R$ {ticket.price}
                          </Text>
                        </View>
                      </View>
                      <View className="flex-row justify-between mt-2">
                        <View>
                          <Text className="text-white text-sm">Hora:</Text>
                        </View>
                        <View>
                          <Text className="text-white text-sm font-bold">
                            {ticket.time}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <View className="p-3">
                        <QrCode size={45} color={"white"} />
                      </View>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
