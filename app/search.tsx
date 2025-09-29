import { Category } from "@/components/ui/category";
import { Input, InputField } from "@/components/ui/input";
import { TicketsUi } from "@/components/ui/ticketsUi";
import { Event } from "@/schemas/TicketSchamas";
import { EventService } from "@/services/eventServices";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ArrowLeft, LayoutGrid, List, SearchIcon } from "lucide-react-native";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const [category, setCategory] = useState("all");
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [erros, setErros] = useState("");
  const [activeErros, setActiveErros] = useState(false);
  const [gridOrList, setGridOrList] = useState(false);
  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        const dados = await EventService.getAllEvents();
        setEvents(dados);
      } catch (error) {
        setErros("Erro ao carregar dados, tente novamente mais tarde");
        setActiveErros(true);
      } finally {
        setLoading(false);
      }
    };
    loadEvents();
  }, []);

  const EventRender = ({ event }: { event: Event }) => {
    return <TouchableOpacity></TouchableOpacity>;
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView>
        <View>
          <View className="w-full">
            <View className=" flex-row rounded-b-[3rem] overflow-hidden">
              <LinearGradient
                colors={["#6366F1", "#8B5CF6"]}
                className=" py-6 relative items-center justify-evenly flex-row rounded-b-[3rem] "
                style={{ flex: 1 }}
              >
                <TouchableOpacity
                  onPress={() => router.back()}
                  className=" bg-white/50 rounded-full  flex-row  items-center  h-auto  p-1.5"
                >
                  <ArrowLeft color={"#f9fafb"} size={30} />
                </TouchableOpacity>

                <View className="w-10/12  ">
                  <Input
                    className="  border-none bg-white/50"
                    variant="rounded"
                    size="xl"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                  >
                    <View className="pl-2">
                      <SearchIcon
                        size={20}
                        className="text-white"
                        color={"#fff"}
                      />
                    </View>
                    <InputField placeholder="Pesquisar pessoas..." />
                  </Input>
                </View>
              </LinearGradient>
            </View>
          </View>
          <View>
            <Category setCategory={setCategory} />
          </View>
          <View className="flex-row justify-between items-center mt-4 mb-2 px-4">
            <View>
              <Text className="text-gray-600 font-semibold">
                4 Eventos encontrados
              </Text>
            </View>
            <View className="flex-row gap-2">
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setGridOrList(true)}
                className={` ${
                  gridOrList === false ? "bg-gray-200/50" : "bg-indigo-500"
                }  flex-row  items-center rounded-full border h-auto mt-3 px-4 py-2 overflow-hidden border-gray-200 `}
              >
                <LayoutGrid
                  size={20}
                  color={gridOrList === false ? "#000" : "#ffffff"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setGridOrList(false)}
                className={` ${
                  gridOrList === true ? "bg-gray-200/50" : "bg-indigo-500"
                }  flex-row  items-center rounded-full border h-auto mt-3 px-4 py-2 overflow-hidden border-gray-200 `}
              >
                <List
                  size={20}
                  color={gridOrList === true ? "#000" : "#ffffff"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-full h-full bg-white pb-10">
            <TicketsUi
              GridOrList={gridOrList}
              eventTitle=""
              loading={loading}
              activeErros={activeErros}
              event={events}
              onPress={() => {}}
              variant="vertical"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
