
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

import { Stack } from 'expo-router';


export default function Layout() {
  return (
    <GluestackUIProvider >
    <Stack
    
    > 
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="address" options={{headerShown:false, title: 'Detalhes do Evento' }} />
      <Stack.Screen name="contact-us" options={{headerShown:false, title: 'pesquisa' }} />
      <Stack.Screen name="create-event" options={{headerShown:false, title: 'Match' }} />
      <Stack.Screen name="language" options={{headerShown:false, title: 'Match' }} />
      <Stack.Screen name="notification" options={{headerShown:false, title: 'Match' }} />
      <Stack.Screen name="payment-methods" options={{headerShown:false, title: 'Match' }} />
      <Stack.Screen name="personal-info" options={{headerShown:false, title: 'Match' }} />
      <Stack.Screen name="privacy-policy" options={{headerShown:false, title: 'Match' }} />
      <Stack.Screen name="rate-app" options={{headerShown:false, title: 'Match' }} />
      <Stack.Screen name="support-center" options={{headerShown:false, title: 'Match' }} />
    </Stack>
    </GluestackUIProvider>
  );
}
