import { UsersProvider } from "@/context/users/UsersContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from "expo-router";
const queryClient = new QueryClient();
export default function Layout() {
  return (
     <QueryClientProvider client={queryClient}>
    <UsersProvider>
      <Stack>

        <Stack.Screen
        name="signUp"
        options={{ headerShown: false, title: "pesquisa" }}
      />
      <Stack.Screen
        name="signIn"
        options={{ headerShown: false, title: "Detalhes do Evento" }}
      />
      
    </Stack>
    </UsersProvider>
    </QueryClientProvider>
  );
}
