

import { Stack } from 'expo-router';


export default function Layout() {
  return (
    
    <Stack
    
    > 
      
      <Stack.Screen name="index" options={{headerShown:false, title: 'Detalhes do Evento' }} />
      <Stack.Screen name="perfil-signIn" options={{headerShown:false, title: 'pesquisa' }} />
      <Stack.Screen name="perfil-signOut" options={{headerShown:false, title: 'Match' }} />
  
    </Stack>
    
  );
}
