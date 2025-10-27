import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { useUsers } from "@/context/users/UsersContext";
import { Tabs } from "expo-router";
import { Globe, House, Ticket } from "lucide-react-native";
import "../../global.css";
export default function TabLayout() {
  const { userDate } = useUsers();
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
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <Avatar size="xs">
              {userDate?.foto_perfil ? (
                <AvatarImage source={{ uri: userDate.foto_perfil }} />
              ) : userDate?.nome ? (
                <AvatarFallbackText>
                  {`${userDate?.nome?.charAt(0) ?? ""} ${
                    userDate?.sobrenome?.charAt(0) ?? ""
                  }`}
                </AvatarFallbackText>
              ) : (
                <AvatarImage
                  source={{
                    uri: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
                  }}
                />
              )}
            </Avatar>
          ),
        }}
      />
    </Tabs>
  );
}
