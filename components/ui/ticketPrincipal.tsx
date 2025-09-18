import { Event } from "@/schemas/TicketSchamas";
import { EventService } from "@/services/eventServices";
import { Image } from "expo-image";
import React from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SkeletonPrincipal } from "./skeletonPrincipal";
export const TicketPrincipal = () => {
  const { width } = Dimensions.get("window");
  const viewWidth = width * 0.9;
  const viewHeight = 200;
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

  return (
    <View className="w-full h-auto items-center justify-center mt-4 mb-8">
      {loading && <SkeletonPrincipal />}
      {event.length > 0 && (
        <View
          style={{
            width: viewWidth,
            height: viewHeight,
          }}
        >
          <Carousel
            loop
            autoPlay
            autoPlayInterval={3000}
            width={width}
            height={200}
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
              <View
                style={{ width: viewWidth, height: viewHeight }}
                className=" rounded-2xl overflow-hidden"
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: 16,
                  }}
                />
              </View>
            )}
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
      )}
    </View>
  );
};
