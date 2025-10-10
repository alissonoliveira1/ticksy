

import { Stack } from 'expo-router';


export default function Layout() {
  return (
    
    <Stack
    
    > 
      
      <Stack.Screen name="address" options={{headerShown:false, title: 'Detalhes do Evento' }} />
      <Stack.Screen name="contact-us" options={{headerShown:false, title: 'pesquisa' }} />
      <Stack.Screen name="create-event" options={{headerShown:false, title: 'Match' }} />
      <Stack.Screen name="language" options={{headerShown:false, title: 'Match' }} />
      <Stack.Screen name="notifications" options={{headerShown:false, title: 'Match' }} />
      <Stack.Screen name="payment-methods" options={{headerShown:false, title: 'Match' }} />
      <Stack.Screen name="personal-info" options={{headerShown:false, title: 'Match' }} />
      <Stack.Screen name="privacy-policy" options={{headerShown:false, title: 'Match' }} />
      <Stack.Screen name="rate-app" options={{headerShown:false, title: 'Match' }} />
      <Stack.Screen name="support-center" options={{headerShown:false, title: 'Match' }} />
    </Stack>
    
  );
}
