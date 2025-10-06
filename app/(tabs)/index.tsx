import { AlertUi } from "@/components/ui/alertUi";
import { Category } from "@/components/ui/category";
import { ModalLocal } from "@/components/ui/dialog";
import { TicketPrincipal } from "@/components/ui/ticketPrincipal";
import { TicketsUi } from "@/components/ui/ticketsUi";
import { Event } from "@/schemas/TicketSchamas";
import { EventService } from "@/services/eventServices";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ChevronDown, MapPin, SearchIcon } from "lucide-react-native";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [featuredEvents, setFeaturedEvents] = useState<Event[]>([]);
  const [otherEvents, setOtherEvents] = useState<Event[]>([]);
  const [category, setCategory] = useState("all");
  const [erros, setErros] = useState("");
  const [activeErros, setActiveErros] = useState(false);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleEventPress = (event: Event) => {
    console.log("Evento pressionado:", event);
    router.push({ pathname: "/TicketDetails", params: { id: event.id } });
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
    <View className="flex-1  bg-gray-50">

      {activeErros ? <AlertUi erros={erros} /> : null}
      <StatusBar style="light" backgroundColor="#6366F1" translucent={false} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 #f9fafb pb-40"
      >
        <View className="w-full">
          <View className=" flex-row rounded-b-[3rem] overflow-hidden">
            <LinearGradient
              colors={["#6366F1", "#8B5CF6"]}
              className=" p-5  items-center justify-between flex-row rounded-b-[3rem] "
              style={{ flex: 1 }}
            >
              <View>
                <TouchableOpacity
                  activeOpacity={1}
                  className="flex-row gap-2 bg-black/20 mt-3 px-4 py-2 items-center rounded-full border border-gray-200"
                  onPress={() => setActive(true)}
                >
                  <MapPin color={"#f9fafb"} size={17} />
                  {selectedLocation ? (
                    <Text className="text-white">{selectedLocation}</Text>
                  ) : (
                    <Text className="text-white font-semibold text-sm">Onde você está?</Text>
                  )}
                  <ChevronDown color={"#f9fafb"} size={17} />
                </TouchableOpacity>
                <View></View>
              </View>

              <TouchableOpacity
                onPress={() => router.push("/search")}
                className=" bg-black/20  flex-row  
                items-center rounded-full border h-auto 
                mt-3 px-4 py-2 overflow-hidden border-gray-200"
              >
                <SearchIcon size={17} color={"#ffffff"} />
                <View className="pl-2 ">
                  <Text className="text-white text-sm">Buscar eventos</Text>
                </View>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <TicketPrincipal />
        <View>
          <Category setCategory={setCategory} />
        </View>
        <View>
          <TicketsUi
            eventTitle="Mais comprados nas últimas 24h"
            loading={loading}
            activeErros={activeErros}
            event={featuredEvents}
            onPress={handleEventPress}
            variant="horizontal"
            GridOrList={true}
          />
        </View>
        <View>
          <TicketsUi
            eventTitle="Mais comprados nas últimas 24h"
            loading={loading}
            activeErros={activeErros}
            event={otherEvents}
            onPress={handleEventPress}
            variant="horizontal"
            GridOrList={true}
          />
        </View>
      </ScrollView>
      <ModalLocal
        active={active}
        setActive={setActive}
        setSelectedLocation={setSelectedLocation}
      />
    </View>
  
  );
}
