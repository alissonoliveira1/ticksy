import { AlertUi } from "@/components/ui/alertUi";
import { Category } from "@/components/ui/category";
import { TicketPrincipal } from "@/components/ui/ticketPrincipal";
import { TicketsUi } from "@/components/ui/ticketsUi";
import { Event } from "@/schemas/TicketSchamas";
import { EventService } from "@/services/eventServices";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SearchIcon } from "lucide-react-native";
import { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [featuredEvents, setFeaturedEvents] = useState<Event[]>([]);
  const [otherEvents, setOtherEvents] = useState<Event[]>([]);
  const [category, setCategory] = useState("all");
  const [erros, setErros] = useState("");
  const [activeErros, setActiveErros] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleEventPress = (event: Event) => {
    console.log("Evento pressionado:", event);
    router.push({pathname: "/TicketDetails", params: { id: event.id }});

  };

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        const featured = await EventService.getFeaturedEvents();

        const featuredFiltered = featured.filter(
          (event) => event.category === category || category === "all"
        );

        if (featuredFiltered.length === 0) {
          setErros("Nenhum evento encontrado para esta categoria");
          setActiveErros(true);
          setFeaturedEvents([]);
          setOtherEvents([]);
        } else {
          setActiveErros(false);
          setFeaturedEvents(featuredFiltered.slice(0, 5));
          setOtherEvents(featuredFiltered.slice(0, 5));
        }
      } catch (error) {
        setErros("Erro ao carregar dados, tente novamente mais tarde");
        setActiveErros(true);
        setFeaturedEvents([]);
        setOtherEvents([]);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, [category]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      {activeErros ? <AlertUi erros={erros} /> : null}
      <StatusBar style="light" backgroundColor="#6366F1" translucent={false} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white pb-40"
      >
        <View className="w-full">
          <View className=" flex-row rounded-b-[3rem] overflow-hidden">
            <LinearGradient
              colors={["#6366F1", "#8B5CF6"]}
              className=" p-5 flex-col items-center rounded-b-[3rem] "
              style={{ flex: 1 }}
            >
              <View className="items-center justify-center flex-1 mb-4">
                <Text className="text-white font-bold text-3xl">Ticksy</Text>
              </View>
              <View className=" bg-black/20  flex-row flex-1 items-center rounded-2xl border h-auto px-3 overflow-hidden border-gray-200">
                <SearchIcon size={20} color={"#ffffff"} />
                <TextInput
                  placeholderTextColor={"#F3F4F6"}
                  placeholder="Buscar experiências"
                  className=" h-11 flex-1 text-white rounded-lg text-base leading-10 placeholder-gray-200::placeholder
                "
                />
              </View>
            </LinearGradient>
          </View>
        </View>
        <TicketPrincipal />
        <View>
          <Category setCategory={setCategory} />
        </View>
        <View>
          <TicketsUi
            eventTitle="Eventos mais comprados nas últimas 24h"
            loading={loading}
            activeErros={activeErros}
            event={featuredEvents}
            onPress={handleEventPress}
            variant="horizontal"
          />
        </View>
        <View>
          <TicketsUi
            eventTitle="Eventos mais comprados nas últimas 24h"
            loading={loading}
            activeErros={activeErros}
            event={otherEvents}
            onPress={handleEventPress}
            variant="horizontal"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
