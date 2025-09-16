import { Event } from "@/schemas/TicketSchamas";
import { EventService } from "@/services/eventServices";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
export default function TicketDetails() {
    const [event, setEvent] = useState<Event | null>(null);
    const [loading, setLoading] = useState(true);
    const { id } = useLocalSearchParams<{ id: string }>();
   useEffect(() => {
  if (!id) return;

  const fetchEvent = async () => {
    try {
      const data = await EventService.getById(id);
      setEvent(data);
    } catch (error) {
      console.error("Erro ao buscar evento:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchEvent(); 
}, [id]);
    console.log(event);
    console.log("ID do evento:", id);
    return(
   <View>
    {loading ? <Text>Loading...</Text> : null }
        
  
         <Text>{event?.title}</Text>
            <Text>{event?.description}</Text>
            <Text>{event?.date}</Text>
            <Text>{event?.time}</Text>
            <Text>{event?.venue}</Text>
            <Text>{event?.address}</Text>
            <Text>{event?.price.currency} {event?.price.min} - {event?.price.max}</Text>
            <Text>Disponíveis: {event?.availableTickets} de {event?.totalTickets}</Text>
            <Text>Organizador: {event?.organizer}</Text>
            
                
   </View>
    )
}