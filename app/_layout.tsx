import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import { UsersProvider } from "@/context/users/UsersContext";
import { Stack } from "expo-router";
export default function Layout() {
  return (
    <GluestackUIProvider>
    <UsersProvider>
        <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="TicketDetails"
          options={{ headerShown: false, title: "Detalhes do Evento" }}
        />
        <Stack.Screen
          name="auth"
          options={{ headerShown: false, title: "Detalhes do Evento" }}
        />
        
        <Stack.Screen
          name="search"
          options={{ headerShown: false, title: "pesquisa" }}
        />
        <Stack.Screen
          name="pageMatch"
          options={{ headerShown: false, title: "Match" }}
        />
        <Stack.Screen
          name="pageChat"
          options={{ headerShown: false, title: "Match" }}
        />
        <Stack.Screen
          name="profile"
          options={{ headerShown: false, title: "Criar Evento" }}
        />
      </Stack>
    </UsersProvider>
    </GluestackUIProvider>
  );
}
