import { View } from "react-native";
import PerfilSignIn from "./perfil-signIn";
import PerfilSignOut from "./perfil-signOut";
import { useState } from "react";
export default function Index() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
return(
   <>
      {isLoggedIn ? <PerfilSignIn /> : <PerfilSignOut />}

   </>
    )
}
    