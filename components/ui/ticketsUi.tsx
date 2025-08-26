import { Event } from "@/schemas/TicketSchamas";
import { Image } from "expo-image";
import { Music } from "lucide-react-native";
import { Text, View } from "react-native";
interface EventCardProps {
  event: Event;
  onPress: (event: Event) => void;
  variant?: 'featured' | 'standard' | 'compact' | 'horizontal';
}
export const TicketsUi = ({event, onPress, variant = 'standard'}:EventCardProps) => {
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
   const getAvailabilityStatus = () => {
    const percentage = (event.availableTickets / event.totalTickets) * 100;
    if (percentage > 50) return { text: 'Disponible', color: '#4CAF50' };
    if (percentage > 10) return { text: 'Peu de places', color: '#FF9800' };
    return { text: 'Dernières places', color: '#F44336' };
  };
  const availability = getAvailabilityStatus();
  return (
    <View className=" w-52 h-auto  rounded-[1rem] shadow-lg shadow-black  m-3 ">
      <View className="w-full relative h-[7.3rem] overflow-hidden ">
        <View className="rounded-t-[1rem] overflow-hidden ">
          <Image
            source={{ uri: event.image }}
            className=""
            style={{ width: "100%", height: "100%" }}
            contentFit="contain"
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
            <View className="bg-indigo-500 rounded-full p-1">
              <View>
                <Music color={"white"} size={12} />
              </View>
            </View>
            <View style={{backgroundColor:availability.color}} className="w-3 h-3 rounded-full "></View>
          </View>
        </View>
        <View>
          <Text className="line-clamp-2 font-semibold">
            {event.title}
          </Text>
        </View>
        <View>
          <Text className="text-sm">{event.address}</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-sm">  {event.price.currency} {event.price.min},00</Text>
          <Text className="text-sm">{event.time}</Text>
        </View>
      </View>
    </View>
  );
};
