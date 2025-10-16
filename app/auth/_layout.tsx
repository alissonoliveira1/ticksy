import { Stack } from "expo-router";

export default function Layout() {
  return (
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
  );
}
