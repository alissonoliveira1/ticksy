import { Event } from "@/schemas/TicketSchamas";
import { EventService } from "@/services/eventServices";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { CalendarDays, Heart, MapPin, UsersRound } from "lucide-react-native";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function TicksyConnect() {
const [data,setData] = useState<Event[]>([])
const [loading,setLoading] = useState(false)
const [error,setError] = useState(null)

useEffect(() => {
  const fetchData = async () => {
   try{
    setLoading(true)
    const response = await EventService.getAllEvents()
    setData(response)
   }
    catch(e){
    
    }
    finally{
      setLoading(false)
    }
  }
  fetchData()
},[])


  const renderItem = ({ item }: { item: Event }) => (
    <View className="p-2">
      <TouchableOpacity className="w-full relative rounded-[2rem] border border-gray-200 overflow-hidden h-52 
      elevation-10 shadow-lg">
       <Image style={{width:"100%", height:"100%"}} contentFit="cover" source={item.image} />
    
        <LinearGradient
        colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.6)"]}
        style={{ position: "absolute", width: "100%", height: "100%",zIndex:10 }}
      />
      <View className="absolute rounded-[3rem] w-full z-20 h-full flex-row justify-between p-4">
        <View className="flex-1 w-full ">
          <View>
            <Text className="text-white text-2xl font-bold ">
            {item.title}
          </Text>
          </View>
          <View className=" flex-row items-center gap-2 mt-2">
            <CalendarDays size={16} color="white"/>
            <Text className="text-white text-sm ">
            {item.date} 
          </Text>
          </View>
         <View className=" flex-row items-center gap-2 mt-2">
          <MapPin size={16} color="white" />
           <Text className="text-white text-sm ">
             {item.venue}
          </Text>
         </View>
       <View className=" flex-row items-center gap-2 mt-2">
        <UsersRound size={16} color="white"/>
           <Text className="text-white text-sm ">
            pessoas 234
          </Text>
       </View>
        </View>
        <View className="justify-top items-center">
          <View className="flex-row bg-black/50 py-1 px-2 rounded-full items-center gap-1">
          
            <View>
              <Heart size={16} color="#ef4444" fill={'#ef4444'} className="absolute top-4 right-4" />
            </View>
            <View>
              <Text className="text-gray-100 text-sm">30</Text>
            </View>
          </View>
        </View>
        
      </View>
  <View className="absolute bottom-2 w-full z-20   items-center">
          
            <LinearGradient
                  colors={['#FF6B6B', '#FF8E53']}
                   style={{ borderRadius: 24 }}
                  className=" flex-row items-center bg-white/20 rounded-2xl p-2 px-4 gap-2"
                >
              <View>
                <Heart size={22} color="white" fill={'white'} />
              </View>
              <Text className="text-white text-sm font-bold ">
                Descobrir pessoas
              </Text></LinearGradient>
           
        </View>
    </TouchableOpacity>
    </View>
  )


  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="#615FFF" translucent={false} />
      <View className="w-full ">
        <View className=" flex-row bg-transparent rounded-b-[3rem] overflow-hidden">
          <LinearGradient
            colors={["#6366F1", "#8B5CF6"]}
            className=" p-5 flex-row items-center rounded-b-[3rem] "
            style={{ flex: 1 }}
          >
            <View className="items-center justify-center h-20 flex-1">
              <View className="pb-4">
                <Text className="text-white font-bold text-xl">
                  Ticksy Connect
                </Text>
              </View>
              <View className=" w-full  items-center ">
                <Text className="text-gray-200 font-center font-bold text-sm">
                  Encontre pessoas incríveis nos eventos que você comprou

                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
     
          <View className="h-[48rem]">
              <FlatList
             data={data}
             showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              
            />
          </View>
    
    </SafeAreaView>
  );
}
