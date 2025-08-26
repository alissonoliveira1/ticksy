import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Category } from "@/components/ui/category";
import { TicketsUi } from "@/components/ui/ticketsUi";
import { Event } from "@/schemas/TicketSchamas";
import { EventService } from "@/services/eventServices";
import {
  BackdropBlur,
  Canvas,
  Image,
  useImage,
} from "@shopify/react-native-skia";
import { LinearGradient } from "expo-linear-gradient";

import { StatusBar } from "expo-status-bar";
import { Calendar, Heart, SearchIcon, Users } from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  StatusBar as RNStatusBar,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [featuredEvents, setFeaturedEvents] = useState<Event[]>([]);
  const { width } = Dimensions.get("window");
  const viewWidth = width * 0.9;
  const viewHeight = 200;

  const STATUS_BAR_HEIGHT =
    Platform.OS === "android" ? RNStatusBar.currentHeight : 44;

  const [loading, setLoading] = useState(false);
  const handleEventPress = (event: Event) => {
    console.log("Evento selecionado:", event.title);
  };
  const loadEvents = async () => {
    try {
      setLoading(true);
      const [featured] = await Promise.all([EventService.getFeaturedEvents()]);
      setFeaturedEvents(featured);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadEvents();
  }, []);
  const renderEvent = ({ item }: { item: Event }) => (
    <View>
      <TicketsUi event={item} onPress={handleEventPress} variant="horizontal" />
    </View>
  );
  const image = useImage("https://i.ibb.co/hxKXJ9YS/banner.png");
  if (!image) return null;
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white"
      >
        <View className="bg-indigo-500" style={{ height: STATUS_BAR_HEIGHT }} />
        <StatusBar style="light" />
        <View className="w-full">
          <View className=" flex-row rounded-b-[3rem] overflow-hidden">
            <LinearGradient
              colors={["#6366F1", "#8B5CF6"]}
              className=" p-5 flex-row items-center rounded-b-[3rem] "
              style={{ flex: 1 }}
            >
              <View className=" bg-black/20  flex-row flex-1 items-center rounded-2xl border h-auto px-3 overflow-hidden border-gray-200">
                <SearchIcon size={20} color={"#ffffff"} />
                <TextInput className=" h-11 flex-1 text-white rounded-lg text-base leading-10 " />
              </View>
              <View className="ml-2">
                <Avatar size="md">
                  <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                  <AvatarImage
                    source={{
                      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    }}
                  />
                  <AvatarBadge />
                </Avatar>
              </View>
            </LinearGradient>
          </View>
        </View>
        <View className="w-full h-auto items-center justify-center mb-4">
          <View
            style={{
              width: viewWidth,
              height: viewHeight,
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              borderRadius: 16,
            }}
          >
            <Canvas style={{ width: "100%", height: "100%" }}>
              <Image
                image={image}
                x={0}
                y={0}
                width={viewWidth}
                height={viewHeight}
                fit="contain"
              />
              <BackdropBlur
                blur={2}
                clip={{ x: 0, y: 102, width: viewWidth, height: 90 }}
              ></BackdropBlur>
            </Canvas>
          </View>
        </View>
        <View>
          <Category />
        </View>
        <View>
          <FlatList
            data={featuredEvents}
            renderItem={renderEvent}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View className=" w-full h-auto">
          <View className=" w-full  h-52    overflow-hidden">
            <LinearGradient
              colors={["#6366F1", "#8B5CF6"]}
              className=" p-3 justify-around  "
              style={{ flex: 1 }}
            >
              <View className="w-8/12">
                <Text className="text-2xl text-white font-bold">
                  Descubra & Conecte
                </Text>
                <Text className="text-sm text-gray-100  font-normal">
                  Encontre eventos incríveis e pessoas que compartilham suas
                  paixões
                </Text>
              </View>

              <View className=" gap-2 flex-row flex-1 items-center justify-around">
                <View className="flex-1 text-white p-2 items-center justify-center bg-white/15 rounded-2xl ">
                  <Calendar size={16} color={"yellow"} />
                  <View className=" items-center justify-center pt-1 ">
                    <Text className="text-white font-semibold text-sm">8</Text>
                    <Text className="text-white font-semibold text-sm">
                      Eventos
                    </Text>
                  </View>
                </View>
                <View className="flex-1 p-2  items-center justify-center bg-white/15 rounded-2xl">
                  <Heart size={16} color={"red"} />
                  <View className=" items-center justify-center pt-1 ">
                    <Text className="text-white font-semibold text-sm">8</Text>
                    <Text className="text-white font-semibold text-sm">
                      Matches
                    </Text>
                  </View>
                </View>
                <View className="flex-1 p-2  items-center justify-center bg-white/15 rounded-2xl">
                  <Users size={16} color={"blue"} />
                  <View className=" items-center justify-center pt-1 ">
                    <Text className="text-white font-semibold text-sm">8</Text>
                    <Text className="text-white font-semibold text-sm">
                      Amigos
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
