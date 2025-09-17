
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

import { Stack } from 'expo-router';


export default function Layout() {
  return (
    <GluestackUIProvider >
    <Stack
    
    > 
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="TicketDetails" options={{headerShown:false, title: 'Detalhes do Evento' }} />
    </Stack>
    </GluestackUIProvider>
  );
}
