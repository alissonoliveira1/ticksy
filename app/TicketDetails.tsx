import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { TicketPay } from "@/components/ui/ticketPay";
import { Event } from "@/schemas/TicketSchamas";
import { EventService } from "@/services/eventServices";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useNavigation } from "expo-router";
import LottieView from 'lottie-react-native';
import {
  ArrowLeft,
  Building2,
  CalendarDays,
  ChevronRight,
  MapPin,
  Minus,
  Plus,
  Share2,
  ShoppingCart,
} from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  Dimensions,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
interface TicketType {
  id: string;
  name: string;
  currency: string;
  price: number;
  description: string;
  benefits: string[];
  available: number;
  total: number;
  color: string[];
}
export default function TicketDetails() {
  const navigation = useNavigation();
  const [scrollY, setScrolly] = useState(0);
  const width = Dimensions.get("window").width;
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { id } = useLocalSearchParams<{ id: string }>();
  const [selectedTicket, setSelectedTicket] = useState('');

  const mockTicketTypes: TicketType[] = [
    {
      id: "1",
      name: "Standard",
      currency: "R$",
      price: 45,
      description: "Entrada geral com acesso completo ao evento",
      benefits: ["Acesso ao evento", "Área geral", "Banheiros"],
      available: 150,
      total: 200,
      color: ["#10B981", "#34D399"],
    },
    {
      id: "2",
      name: "VIP",
      currency: "R$",
      price: 85,
      description: "Experiência premium com benefícios exclusivos",
      benefits: [
        "Acesso ao evento",
        "Área VIP",
        "Bar exclusivo",
        "Estacionamento grátis",
      ],
      available: 25,
      total: 50,
      color: ["#F59E0B", "#FBBF24"],
    },
    {
      id: "3",
      name: "Premium",
      currency: "R$",
      price: 120,
      description: "Experiência completa com todos os benefícios",
      benefits: [
        "Acesso ao evento",
        "Área Premium",
        "Meet & Greet",
        "Catering incluso",
        "Lembrança exclusiva",
      ],
      available: 8,
      total: 20,
      color: ["#8B5CF6", "#A78BFA"],
    },
  ];
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
 
  const date2 = new Date(event?.date || "");
  const date = date2.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const handleTotal = (ev:string) => {
   setSelectedTicket(ev)
    
  }
 
    const selected = mockTicketTypes.find(ticket => ticket.id === selectedTicket);
    const total = selected ? selected.price * quantity : 0
  

  const handleScroll = (event: any) => {
    setScrolly(event.nativeEvent.contentOffset.y);
  };
  const abrirNoMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      event.address
    )}`;

    Linking.openURL(url).catch((err) =>
      console.error("Erro ao abrir o Maps:", err)
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {scrollY >= 190 ? (
        <View className="absolute top-8 left-0 right-0 w-full flex-row  p-2 justify-between z-10">
          <TouchableOpacity
            className="rounded-full items-center justify-center w-10 h-10 bg-black/20 left-0 top-0 p-2"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft color="white" size={24} />
          </TouchableOpacity>
          <TouchableOpacity className=" items-center rounded-full justify-center w-10 h-10 bg-black/20 right-0 top-0 p-2">
            <Share2 color="white" size={20} />
          </TouchableOpacity>
        </View>
      ) : null}
     
        <View>
          {loading ? 
          <View className="w-full h-screen justify-center items-center bg-gray-50">

      <LottieView
      source={{ uri: 'https://lottie.host/288cdfa5-336c-4a91-a7c8-cfda9b52c479/OuYPKwJJnW.lottie' }}
      autoPlay
      loop
      speed={1.5} 
      style={{ width: 250, height: 250 }}
    />


          </View> : (
 <ScrollView onScroll={handleScroll} showsVerticalScrollIndicator={false}>
          <View className="w-full h-auto relative">
            <View className="absolute top-4 left-0 w-full flex-row  p-2 justify-between z-10">
              <TouchableOpacity
                className="rounded-full items-center justify-center w-10 h-10 bg-black/30 left-0 top-0 p-2"
                onPress={() => navigation.goBack()}
              >
                <ArrowLeft color="white" size={24} />
              </TouchableOpacity>
              <TouchableOpacity className=" items-center rounded-full justify-center w-10 h-10 bg-black/30 right-0 top-0 p-2">
                <Share2 color="white" size={20} />
              </TouchableOpacity>
            </View>
            <Image
              style={{ width: width, height: 220 }}
              className="object-cover"
              source={event?.image}
            />
          </View>
          <View className="bg-gray-50 rounded-[1.5rem] p-4 w-full relative bottom-7 shadow-xl">
            <View>
              <Text className="text-gray-900 font-bold text-[1.40rem]">
                {event?.title}
              </Text>
            </View>
            <View className="py-2  pb-4">
              <Text className="text-gray-500 font-normal">
                {event?.description}
              </Text>
            </View>
            <View className="gap-3">
              <View className="p-2 rounded-2xl bg-white flex-row items-center ">
                <View className="pr-2  rounded-full">
                  <CalendarDays color="#6366F1" size={23} />
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
              <TouchableOpacity
                onPress={abrirNoMaps}
                className=" p-2  bg-white rounded-2xl elevation-sm flex-row items-center "
              >
                <View className="pr-2 ">
                  <MapPin color="#6366F1" size={23} />
                </View>
                <View className="gap-1 ">
                  <View className="">
                    <Text className="text-gray-400 font-semibold">Local</Text>
                  </View>
                  <View className="">
                    <Text className="text-gray-700 text-lg font-semibold">
                      {event?.venue}
                    </Text>
                  </View>
                  <View className="flex-row  items-center ">
                    <View style={{ width: width / 1.3 }} className="  ">
                      <Text className="text-gray-400 font-semibold">
                        {event?.address}
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <ChevronRight color={"#9ca3af"} size={23} />
                </View>
              </TouchableOpacity>
              <View className=" p-2 rounded-2xl bg-white flex-row items-center ">
                <View className="pr-2  rounded-full">
                  <Building2 color="#6366F1" size={23} />
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

              <TicketPay handleTotal={handleTotal} />
            </View>
          </View>
          <View>
            {selectedTicket ? (
              <View className="w-full mb-32 h-24       ">
              <View className="px-4">
                <Text className="text-gray-600 font-bold text-xl ">
                  Quantidade
                </Text>
              </View>
              <View className="flex-row gap-10 bg-white justify-center items-center p-2">
                    <TouchableOpacity activeOpacity={1} className="bg-gray-50 p-2 rounded-full elevation-sm"   onPress={() =>setQuantity(Math.max(1, quantity - 1)) }><Minus color={'#6366f1'} size={25}/></TouchableOpacity>
                <Text className="text-gray-700 font-bold text-center w-10 text-2xl">
                  {quantity}
                </Text>
              <TouchableOpacity className="bg-gray-50 p-2 rounded-full elevation-sm"  activeOpacity={1}  onPress={() => setQuantity(Math.min(10, quantity + 1))}><Plus color={'#6366f1'} size={25}/></TouchableOpacity>
              </View>
            </View>
            ) : null}
          </View>
           </ScrollView>)}
        </View>
     
     { selectedTicket ? ( <View className="w-full h- absolute bottom-0 left-0 right-0 pb-5 bg-white elevation-md px-4 pt-3  flex-row justify-between items-center">
        
            <View>
              <View>
                <Text className=" text-base text-gray-500">Total</Text>
              </View>
              <View>
                <Text className="font-bold text-[1.40rem]">{selected?.currency} {total},00</Text>
              </View>
              <View>
                <Text className=" text-base text-gray-500">{quantity}x {selected?.name}</Text>
              </View>
            </View>
           <View>
             <View   className=" overflow-hidden w-44 h-14 rounded-3xl"> 
          
               <LinearGradient
                            colors={["#6366F1", "#8B5CF6"]}
                            className=" items-center justify-center gap-2 flex-row "
                            style={{ flex: 1 }}
                          >
           
                <View>
                  <ShoppingCart color="#fff" size={23} />
                </View>
                <View>
                  <Text className="text-white font-bold">Comprar Agora</Text>
                </View>
              </LinearGradient>
            </View>
           </View>
          </View>) : null}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  progressBar: {
    height: 4,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 2,
    marginBottom: 6,
  },
  progressFill: {
    height: "100%",
    borderRadius: 2,
  },
});
