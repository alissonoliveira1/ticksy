import { Input, InputField } from "@/components/ui/input";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import {
  CalendarDays,
  ChevronDown,
  Clock,
  Funnel,
  MapPin,
  QrCode,
  Receipt,
  SearchIcon,
} from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const tickets = [
  {
    id: "1",
    title: "Show de Rock",
    date: "2025-10-11",
    category: "music",
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
    category: "theater",
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
    category: "music",
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
    title: "Google IO 2025",
    date: "2023-20-12",
    category: "conference",
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string[] } = {
      music: ["#FF6B6B", "#FF8E53"],
      sport: ["#4ECDC4", "#44A08D"],
      theater: ["#A8E6CF", "#7FCDCD"],
      conference: ["#FFD93D", "#6BCF7F"],
      festival: ["#FF8A80", "#FF5722"],
      comedy: ["#CE93D8", "#BA68C8"],
      art: ["#FFAB91", "#FF8A65"],
      food: ["#A5D6A7", "#66BB6A"],

      cinema: ["#5C6BC0", "#3949AB"],
      party: ["#F50057", "#FF4081"],
      family: ["#81D4FA", "#29B6F6"],
      lecture: ["#FFEB3B", "#FFC107"],
      tech: ["#00C9FF", "#92FE9D"],
      wellness: ["#81C784", "#388E3C"],
      charity: ["#FFB74D", "#F57C00"],
      university: ["#673AB7", "#3F51B5"],
    };
    return colors[category] || ["#B39DDB", "#9575CD"];
  };
  const date = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
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
    <SafeAreaView className="flex-1  bg-gray-50">
      <StatusBar style="light" backgroundColor="#6366F1" translucent={false} />
      <ScrollView className="h-auto" showsVerticalScrollIndicator={false}>
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

        <View className="w-full  bg-white border border-gray-100   pt-4">
          <View className="w-full  mt-4  justify-center items-center">
            <View className="w-10/12  ">
              <Input
                className="border border-gray-300  bg-white/50"
                variant="rounded"
                size="xl"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <View className="pl-2">
                  <SearchIcon
                    size={20}
                    className="text-gray-400"
                    color={"#9ca3af"}
                  />
                </View>
                <InputField placeholder="Pesquisar ingressos..." />
              </Input>
            </View>
          </View>

          <View className="px-9">
            <View className=" w-full py-2 justify-center items-end mt-4">
            <View className="relative   w-1/2">
              <TouchableOpacity onPress={() => setMenuOpen(true)} className="  p-2  rounded-2xl ">
                <View className=" flex-row items-center justify-center  gap-3  border-b border-gray-200">
                  <View>
                  <Funnel
                    className="text-gray-500"
                    color={"#6b7280"}
                    size={17}
                  />
                </View>
                <Text className="text-base font-semibold text-gray-500 ">
                  {selectedFilter === 'all' ? 'Filtro de busca' : selectedFilter}
                </Text>
                <ChevronDown color={"#6b7280"} size={17} />
                </View>
              </TouchableOpacity>
       { menuOpen && (<View className="w-full    absolute h-auto p-1 top-11 z-20 bg-gray-100  elevation-sm rounded-b-lg  justify-center ">
                <View className="">
                  <TouchableOpacity onPress={() => { setSelectedFilter('Validos'); setMenuOpen(false); }} className="p-3 border-b border-b-gray-50 ">
                    <Text className="text-gray-500">Validos</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { setSelectedFilter('Usados'); setMenuOpen(false); }} className="p-3 border-b border-b-gray-50 text-gray-500">
                    <Text className="text-gray-500">Usados</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { setSelectedFilter('Expirados'); setMenuOpen(false); }} className="p-3 border-b border-b-gray-50 text-gray-500">
                    <Text className="text-gray-500">Expirados</Text>
                  </TouchableOpacity>
                </View>
              </View>)}
              
            </View>
          </View>
          </View>
        </View>

        <View
          className="flex-col
          relative z-10
    gap-4 mt-4 px-4"
        >
          {tickets.map((ticket) => (
            <TouchableOpacity
              key={ticket.id}
              className="w-full h-auto rounded-2xl overflow-hidden elevation-md"
            >
              <LinearGradient
                colors={getCategoryColor(ticket.category) as [string, string]}
                className="w-full h-auto rounded-2xl    "
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View className="w-full h-auto blur-sm rounded-2xl p-3 bg-black/10">
                  <View className="flex-row justify-between ">
                    <View>
                      <Text className="text-white text-2xl line-clamp-1 w-60 font-bold pb-2">
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
                        <View className="flex-row items-center gap-1">
                          <Receipt size={15} color={"white"} />
                          <Text className="text-white text-sm">Preço:</Text>
                        </View>
                        <View>
                          <Text className="text-white text-sm font-bold">
                            R$ {ticket.price}
                          </Text>
                        </View>
                      </View>
                      <View className="flex-row justify-between mt-2">
                        <View className="flex-row items-center gap-1">
                          <Clock size={15} color={"white"} />
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
