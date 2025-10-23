import { auth } from "@/services/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    onAuthStateChanged,
    signInWithCustomToken,
    signOut,
    User,
} from "firebase/auth";
import React, {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";


interface Usuario {
  id: string; 
  firebase_uid: string;
  nome: string | null;
  sobrenome: string | null;
  email: string;
  foto_perfil: string | null;
  bio: string | null;
  telefone: string | null;
  role: string;
  verificado: boolean;
  ativo: boolean;
  data_nascimento: Date | null;
  data_criacao: Date;
  ultimo_login: Date | null;
}


interface UsersContextType {
  userDate: Usuario | null;
  setUserDate: React.Dispatch<React.SetStateAction<Usuario | null>>; 
  loginWithCustomToken: (customToken: string) => Promise<void>;
  logout: () => void;
  firebaseUser: User | null; 
}


const UsersContext = createContext<UsersContextType | null>(null);


const API_URL = "http://192.168.100.6:5000";

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [userDate, setUserDate] = useState<Usuario | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null); 
  const [currentIdToken, setCurrentIdToken] = useState<string | null>(null); 

  const loginWithCustomToken = useCallback(async (customToken: string) => {
    try {
      console.log("Iniciando signInWithCustomToken..."); 
      await signInWithCustomToken(auth, customToken); 
      console.log("✅ Usuário autenticado no Firebase.");
    } catch (error) {
      console.error("❌ Erro ao trocar Custom Token:", error);
      throw new Error("Falha na autenticação. Verifique o token ou a conexão.");
    }
  }, []); 

  const logout = useCallback(async () => {
    console.log("Iniciando logout...");
    setUserDate(null);
    setFirebaseUser(null);
    setCurrentIdToken(null); 
    await signOut(auth);
    await AsyncStorage.removeItem("authToken");
    console.log("✅ Usuário deslogado. Sessão limpa.");
  }, []); 

  useEffect(() => {
  
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(`[AUTH STATE] Usuário Firebase detectado: ${user.email}`);
        setFirebaseUser(user);
        const idToken = await user.getIdToken(true);
        setCurrentIdToken(idToken);
        await AsyncStorage.setItem("authToken", idToken); 
      } else {
        console.log("[AUTH STATE] Nenhum usuário Firebase logado.");
        setFirebaseUser(null);
        setCurrentIdToken(null);
        setUserDate(null);
        await AsyncStorage.removeItem("authToken");
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!currentIdToken || !firebaseUser) {
        setUserDate(null);
        return;
      }

      try {
        console.log("Buscando dados do perfil com ID Token...");
        const response = await fetch(`${API_URL}/auth/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json", 
            Authorization: `Bearer ${currentIdToken}`,
          },
        });

        if (!response.ok) {
         
          throw new Error(
            "Erro ao buscar dados do usuário: Token inválido ou expirado"
          );
        }
        const responseJson = await response.json(); 
        const data: Usuario = responseJson.usuario;

        if (!data) {
          throw new Error("Resposta de perfil incompleta ou vazia.");
        } 
        const parseDate = (dateString: any): Date | null => {
          return dateString && typeof dateString === "string"
            ? new Date(dateString)
            : null;
        };
        data.data_criacao = parseDate(data.data_criacao) as Date;
        data.data_nascimento = parseDate(data.data_nascimento);
        data.ultimo_login = parseDate(data.ultimo_login);

        setUserDate(data);
        console.log("✅ Dados do perfil carregados para:", data.email);
      } catch (error) {
        console.error(
          "❌ Erro ao buscar dados do usuário (Profile API):",
          error
        ); 
        logout();
      }
    };
    fetchUserData();
  }, [currentIdToken, firebaseUser, logout]);

  console.log("UserContext userDate:", userDate ? userDate : "Nulo");

  const contextValue: UsersContextType = {
    userDate,
    setUserDate,
    loginWithCustomToken, 
    logout,
    firebaseUser,
  };

  return (
    <UsersContext.Provider value={contextValue}>
   {children}
    </UsersContext.Provider>
  );
};


export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsers must be used within a UsersProvider");
  }
  return context;
};
