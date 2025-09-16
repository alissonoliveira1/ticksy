import { BackdropBlur, Canvas, Fill, Image, useImage } from "@shopify/react-native-skia";
import { Dimensions, Text, View } from "react-native";

 export const TicketPrincipal = () => {
      const { width } = Dimensions.get("window");
      const viewWidth = width * 0.9;
      const viewHeight = 200;

      const image = useImage("https://images.sympla.com.br/672b81133f9de.png");
  if (!image) return null;
    return(
          <View className="w-full h-auto items-center justify-center mt-4 mb-4">
          <View
            style={{
              width: viewWidth,
              height: viewHeight,
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              borderRadius: 16,
              position: "relative",
            }}
          >
            <Canvas style={{ width: "100%", height: "100%" }}>
              <Image
                image={image}
                x={0}
                y={0}
                width={viewWidth}
                height={viewHeight}
                fit="cover"
              />
              <BackdropBlur
                blur={5}
                clip={{ x: 0, y: 130, width: viewWidth, height: 70 }}
              >
                <Fill color="rgba(255,255,255,0.1)" />
              </BackdropBlur>
            </Canvas>
            <View className="absolute bottom-4">
              <View className="w-full px-2 ">
                <Text className="text-white font-bold text-lg">
                  Festival de Verão Salvador 2025
                </Text>
              </View>
              <View className="w-full px-2 pb-2 justify-between flex-row ">
                <View>
                  <Text className="font-semibold text-white">preço</Text>
                </View>
                <View>
                  <Text className="font-semibold text-white">Local</Text>
                </View>
              </View>
              <View className="w-full px-2 justify-between flex-row ">
                <View className="flex-1 h-1 rounded-sm bg-red-300"></View>
              </View>
            </View>
          </View>
        </View>
    )
 }