import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Tabs } from "expo-router";
import { Globe, House, Ticket } from "lucide-react-native";
import "../../global.css";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        lazy: true,
        tabBarActiveTintColor: "#615FFF",

   
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",

          tabBarIcon: ({ color }) => <House color={color} size={20} />,
        }}
      />
      <Tabs.Screen
        name="ticksyConnect"
        options={{
          title: "Connect",
          tabBarIcon: ({ color }) => <Globe color={color} size={20} />,
        }}
      />
      <Tabs.Screen
        name="myTicket"
        options={{
          title: "Ingressos",
          tabBarIcon: ({ color }) => <Ticket color={color} size={20} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <Avatar size="xs">
              <AvatarFallbackText>Jane Doe</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://i.ibb.co/mC3m3gFF/00100s-PORTRAIT-00100-BURST20220226153400411-COVER.jpg",
                }}
              />
              <AvatarBadge />
            </Avatar>
          ),
        }}
      />
    </Tabs>
  );
}
