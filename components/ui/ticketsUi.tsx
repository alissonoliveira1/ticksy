import { Event } from "@/schemas/TicketSchamas";
import { Image } from "expo-image";
import { Music } from "lucide-react-native";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SkeletonTicketUi } from "./SkeletonTicketUi";
interface EventCardProps {
  event: Event[];
  eventTitle: string;
  loading: boolean;
  activeErros: boolean;
  onPress: (event: Event) => void;
  variant?: 'featured' | 'standard' | 'compact' | 'horizontal';
}
export const TicketsUi = ({loading,activeErros, eventTitle, event, onPress, variant = 'standard'}:EventCardProps) => {
  console.log("babado msm" + event)
 
     const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string[] } = {
      music: ['#FF6B6B', '#FF8E53'],
      sport: ['#4ECDC4', '#44A08D'], 
      theater: ['#A8E6CF', '#7FCDCD'],
      conference: ['#FFD93D', '#6BCF7F'],
      festival: ['#FF8A80', '#FF5722'],
      comedy: ['#CE93D8', '#BA68C8'],
      art: ['#FFAB91', '#FF8A65'],
      food: ['#A5D6A7', '#66BB6A']
    };
    return colors[category] || ['#B39DDB', '#9575CD'];
  };



  const RenderItem = ({item}: {item:Event}) => {
       const getAvailabilityStatus = () => {
    const percentage = (item.availableTickets / item.totalTickets) * 100;
    if (percentage > 50) return { text: 'Disponible', color: '#4CAF50' };
    if (percentage > 10) return { text: 'Peu de places', color: '#FF9800' };
    return { text: 'Dernières places', color: '#F44336' };
  };
  const availability = getAvailabilityStatus();

    return(
   <TouchableOpacity onPress={() => onPress(item)}  className=" w-52 h-auto elevation-sm rounded-[1rem] shadow-xl shadow-black  m-3 ">
      <View className="w-full relative h-[7.3rem] overflow-hidden ">
        <View className="rounded-t-[1rem] overflow-hidden ">
          <Image
            source={{ uri: item.image }}
            className=""
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
          />
        </View>
        <View className="absolute top-2 right-2 w-10 h-10 justify-center items-center bg-green-500/50 rounded-md p-1 ">
          <Text className="text-white text-center font-bold text-lg">12</Text>
          <Text className="text-xs text-center text-white font-bold -mt-1">
            JUN
          </Text>
        </View>
      </View>
      <View className="bg-white rounded-b-[1rem] p-2">
        <View>
          <View className="flex-row items-center justify-between">
            <View className="bg-indigo-500 w-4 h-4 justify-center items-center rounded-full p-1">
           
                <Music color={"white"} size={8} />
             
            </View>
            <View style={{backgroundColor:availability.color}} className="w-4 h-4 rounded-full "></View>
          </View>
        </View>
        <View className="pb-1">
          <Text className=" text-gray-700 line-clamp-2 font-semibold">
            {item.title}
          </Text>
        </View>
        <View className="pb-1">
          <Text className="text-sm text-gray-600">{item.address}</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-sm text-indigo-500 font-extrabold">{item.price.currency} {item.price.min},00</Text>
          <Text className="text-sm">{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
    )
  }
  return (
<View className="pt-3">
  <View className="w-full px-4 ">
    <Text  className="text-black text-start font-semibold text-lg">
      {eventTitle}
    </Text>
  </View>
  
 {event.length === 0 ? (
  <SkeletonTicketUi />
) : null}
   {loading && !activeErros && <SkeletonTicketUi />}
     {!loading && event.length > 0 && (
     <FlatList
   renderItem={RenderItem}
   data={event}
   keyExtractor={(item) => item.id}
   horizontal
   showsHorizontalScrollIndicator={false}
   />   
   )}
</View>
  );
};
