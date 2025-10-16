import { View } from "react-native";
import PerfilSignIn from "./perfil-signIn";
import { useState } from "react";
import PerfilSignUp from "./perfil-signUp";
export default function Index() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
return(
   <>
      {isLoggedIn ? <PerfilSignIn /> : <PerfilSignUp />}

   </>
    )
}
    