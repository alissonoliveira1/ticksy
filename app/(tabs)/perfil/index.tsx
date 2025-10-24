import { useUsers } from "@/context/users/UsersContext";
import { useState } from "react";
import PerfilSignIn from "./perfil-signIn";
import PerfilSignUp from "./perfil-signUp";
export default function Index() {
    const {userDate} = useUsers();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    if (userDate && userDate.ativo) {
        if (!isLoggedIn) {
            setIsLoggedIn(true);
        }
    } else {
        if (isLoggedIn) {
            setIsLoggedIn(false);
        }
    }
return(
   <>
      {isLoggedIn ? <PerfilSignIn /> : <PerfilSignUp />}

   </>
    )
}
    