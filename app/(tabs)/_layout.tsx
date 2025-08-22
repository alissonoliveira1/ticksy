import { Tabs } from 'expo-router';
import { House, Search, Ticket, User } from 'lucide-react-native';
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
          title: 'Home',
          
         tabBarIcon:  ({color}) => (
             <House color={color} size={20} />
          ),
        }}/>
      <Tabs.Screen name="search" options={{ title: 'pesquisa',
        tabBarIcon: ({color}) => (
          <Search  color={color} size={20} />
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

