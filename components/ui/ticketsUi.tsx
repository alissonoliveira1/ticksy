import { categories } from "@/schemas/EventSchemas";
import { Event } from "@/schemas/TicketSchamas";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { CalendarDays, MapPin, Music, Star } from "lucide-react-native";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SkeletonTicketUi } from "./SkeletonTicketUi";
interface EventCardProps {
  event: Event[];
  eventTitle: string;
  loading: boolean;
  activeErros: boolean;
  GridOrList: boolean;
  onPress: (event: Event) => void;
  variant?: "vertical" | "horizontal";
}
export const TicketsUi = ({
  loading,
  activeErros,
  eventTitle,
  event,
  onPress,
  GridOrList,
  variant ,
}: EventCardProps) => {

  const isHorizontal = variant === "horizontal";
 const colluns =  !isHorizontal ? (GridOrList ? 2 : 1) : 1;
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
    };
    return colors[category] || ["#B39DDB", "#9575CD"];
  };

  const RenderItem = ({ item }: { item: Event }) => {
    const getAvailabilityStatus = () => {
      const percentage = (item.availableTickets / item.totalTickets) * 100;
      if (percentage > 50) return { text: "Disponible", color: "#4CAF50" };
      if (percentage > 10) return { text: "Peu de places", color: "#FF9800" };
      return { text: "Dernières places", color: "#F44336" };
    };
    const availability = getAvailabilityStatus();
    const date = new Date(item.date);
    const formattedDate = (dateString: string) => {
      
      const day = date
        .toLocaleDateString("pt-BR", {
          day: "2-digit",
        })
        .toUpperCase()
        .replace(".", "");
      const month = date
        .toLocaleDateString("pt-BR", {
          month: "short",
        })
        .toUpperCase()
        .replace(".", "");
      return { day, month };
    };

    const dateInfo = formattedDate(item.date);
    const categoryColors = getCategoryColor(item.category);
   
    const IconsCategory =
      categories.find((cat) => cat.key === item.category)?.Icon || "";
const styleGridorList = {
  grid:" w-52 h-[13.7rem] elevation-sm rounded-[1rem] m-1 ",
  list:'w-full h-32 flex-row mt-3 bg-white border-b border-gray-200 px-2 py-2 ',
  imgGrid:"w-full relative h-[7.3rem] rounded-t-[1rem] overflow-hidden ",
  imgList:"w-1/3 relative h-full backdrop-brightness-50 relative rounded-[1rem] overflow-hidden  ",
  infoGrid:"bg-white rounded-b-[1rem] p-2",
  infoList:"flex-1 bg-white rounded-r-[1rem] p-2"

}
    return (
      <TouchableOpacity
        onPress={() => onPress(item)}
        className={GridOrList ? styleGridorList.grid : styleGridorList.list}
      >
        <View className={GridOrList ? styleGridorList.imgGrid : styleGridorList.imgList}>
          <View className="relative">
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: "100%" }}
              contentFit="cover"
              
            />
             {GridOrList ? null: <LinearGradient
        colors={["rgba(0,0,0,0.6)", "transparent"]}
        style={{ position: "absolute", width: "100%", height: "50%" }}
      /> }
          </View>
          <View className={`absolute  ${GridOrList ? "top-2 right-2": "top-1 right-1"} w-10 h-10 justify-center items-center p-1 overflow-hidden  rounded-md`}>
           {GridOrList ? ( <LinearGradient
              colors={categoryColors as [string, string]}
              className=" w-10 h-10 justify-center items-center"
              style={{ borderRadius: 8 }}
            >
              <Text className="text-white text-center font-bold text-lg">
                {dateInfo.day}
              </Text>
              <Text className="text-xs text-center text-white font-bold -mt-1">
                {dateInfo.month}
              </Text>
            </LinearGradient>) : <Star color={"gold"} fill="gold" size={24} />}
          </View>
        </View>
        <View className={GridOrList ? styleGridorList.infoGrid : styleGridorList.infoList}>
          <View>
            <View className="flex-row items-center justify-between">
              <View className="bg-indigo-500 w-4 h-4 justify-center items-center rounded-full p-1">
                {IconsCategory ? (
                  <IconsCategory color="white" size={10} />
                ) : (
                  <Music color="white" size={10} />
                )}
              </View>
              <View
                style={{ backgroundColor: availability.color }}
                className="w-2 h-2 rounded-full "
              ></View>
            </View>
          </View>
          <View className="pb-1">
            <Text className=" text-gray-700 line-clamp-2 font-semibold">
              {item.title}
            </Text>
          </View>
          <View className={GridOrList ? "pb-1 " : "pb-1 flex-row items-center gap-1"}>
           {GridOrList ? null :  <MapPin color={"#6B7280"} size={14} />  }
            <Text className="text-sm text-gray-600">{item.venue}</Text>
          </View>
          <View className="flex-row justify-between items-center">
            {GridOrList ? (<Text className="text-sm text-indigo-500 font-extrabold">
              {item.price.currency} {item.price.min},00
            </Text>) : (<View className="flex-row items-center gap-1">
              <CalendarDays color={"#6366f1"} size={14} />
              <Text className="text-sm text-indigo-500 font-extrabold">
              {date.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </Text>
            </View>)}
            <Text className="text-sm">{item.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View className={colluns === 1 ?"pt-3" : " w-full h-auto justify-center pt-0 items-center "}>
      {GridOrList ? (
        <View className="w-full px-4 ">
        <Text className="text-black text-start font-semibold text-lg">
          {eventTitle}
        </Text>
      </View>
      ): null}

      {event.length === 0 ? <SkeletonTicketUi /> : null}
      {loading && !activeErros && <SkeletonTicketUi />}
      {!loading && event.length > 0 && (
        <FlatList
          key={colluns}
          renderItem={RenderItem}
          scrollEnabled={variant === "horizontal" ? true : false}
          data={event}
          numColumns={ colluns}
          centerContent
          keyExtractor={(item) => item.id}
          horizontal={isHorizontal}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};
