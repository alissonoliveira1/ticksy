import { Event } from "@/schemas/TicketSchamas";
import { EventService } from "@/services/eventServices";
import { Image } from "expo-image";
import { router } from "expo-router";
import { CalendarDays, MapPin } from "lucide-react-native";
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SkeletonPrincipal } from "./skeletonPrincipal";
export const TicketPrincipal = () => {
  const { width } = Dimensions.get("window");
  const viewWidth = width * 0.9;
  const viewHeight = 210;
  const [loading, setLoading] = React.useState(true);
  const [event, setEvent] = React.useState<Event[]>([]);

  const [activeIndex, setActiveIndex] = React.useState(0);
  React.useEffect(() => {
    const featuredEvent = async () => {
      try {
        const event = await EventService.getFeaturedEvents();

        if (event.length > 0) {
          setEvent(event.slice(0, 5));
        }
      } catch (error) {
        console.log("Erro ao carregar evento em destaque:", error);
      } finally {
        setLoading(false);
      }
    };
    featuredEvent();
  }, []);
const handlePress = () => {
  router.push({pathname:'/TicketDetails',params:{id:event[activeIndex].id }})
  console.log(event[activeIndex].id)
  
}
  return (
    <View className="w-full h-auto items-center bg-white justify-center mt-8 pt-2 pb-4 ">
      {loading  && <SkeletonPrincipal />}
      {event.length > 0 && (
        
        <View
          style={{
            width: viewWidth,
          }}
          
        >
          <Carousel
            loop
            autoPlay
            autoPlayInterval={3000}
            width={width}
            height={220}
            
            data={event ?? []}
            mode="horizontal-stack"
            modeConfig={{
              snapDirection: "left",
              stackInterval: 20,
              rotateZDeg: 0,
            }}
            onProgressChange={(_, absoluteProgress) => {
              setActiveIndex(Math.round(absoluteProgress));
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        router.push({
          pathname: "/TicketDetails",
          params: { id: item.id },
        })
      }>
              <View
                style={{ width: viewWidth, height: viewHeight }}
                className="w-full   rounded-2xl overflow-hidden "
              >
                <Image
                  source={{ uri: item.image }}
                  contentFit="cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: 16,
                  }}
                />
              </View>
              </TouchableOpacity>
            )}
          />
          <View
            style={{
              flexDirection: "column",
              marginTop: 12,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              
            }}
          >
            <View className="w-full items-center  px-2 pb-5">
              {event[activeIndex] && (
                <TouchableOpacity className="w-full" onPress={handlePress}>
                  <View className="w-full items-center  px-2">
                  <View className="flex w-full justify-center flex-row  mb-5">
                    <Text className="text-gray-700 text-2xl font-bold">
                  {event[activeIndex].title.toLocaleUpperCase()}
                </Text>
                  </View>
                  <View className="flex w-full flex-row justify-between">
                    <View className="flex flex-row gap-1 items-center">
                      <MapPin color="#6366F1" size={16} />
                      <Text className="text-gray-500 text-sm font-semibold text-center">
                        {event[activeIndex].venue}
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center">
                      <CalendarDays color="#6366F1" size={16} />
                      <Text className="text-gray-500 text-sm font-semibold text-center">
                        {new Date(event[activeIndex].date).toLocaleDateString(
                          "pt-BR",
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
                      </Text>
                    </View>
                  </View>
                </View>
                </TouchableOpacity>
              )}
            </View>

            <View className="flex flex-row mt-2  justify-center items-center">
              {event.map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginHorizontal: 4,
                    backgroundColor:
                      activeIndex === index ? "#2563eb" : "#d1d5db",
                  }}
                />
              ))}
            </View>
          </View>
        </View>
     
      )}
    </View>
  );
};
