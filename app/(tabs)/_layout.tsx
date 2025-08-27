import { Tabs } from 'expo-router';
import { House, Ticket, User, Users } from 'lucide-react-native';
import '../../global.css';
export default function TabLayout() {
  return (
    <Tabs
       screenOptions={{
        headerShown: false,
        lazy: true,
         tabBarActiveTintColor: '#4F46E5',
      
      }}
    >
      <Tabs.Screen name="index"   
       options={{
          title: 'Inicio',
          
         tabBarIcon:  ({color}) => (
             <House color={color} size={20} />
          ),
        }}/>
      <Tabs.Screen name="ticksyConnect" options={{ title: 'Connect',
        tabBarIcon: ({color}) => (
          <Users  color={color} size={20} />
        )
       }} />
      <Tabs.Screen name="myTicket" options={{ title: 'Meu ingresso',
        tabBarIcon: ({color}) => (
          <Ticket  color={color} size={20} />
        )
       }}/>
      <Tabs.Screen name="profile" options={{ title: 'Perfil',
        tabBarIcon: ({color}) => (
          <User  color={color} size={20} />
        )
       }}/>
    </Tabs>
  );
}

