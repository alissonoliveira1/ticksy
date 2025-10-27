import { useUsers } from "@/context/users/UsersContext";
import { StepIndicador } from "@/screens/CreateUser/stepIndicador";
import { StepMail } from "@/screens/CreateUser/steps/stepEmail";
import { StepName } from "@/screens/CreateUser/steps/stepName";
import { StepSenha } from "@/screens/CreateUser/steps/stepSenha";
import { MaterialIcons } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";


interface CreateUserResponse {
  message: string;
  usuario: any; 
  token: string; 
}

export default function SignUp() {
  const [step, setStep] = useState(0);
  const [formNameState, setFormNameState] = useState({
    name: "",
    sobrenome: "",
  });
  const [formPassMailState, setFormPassMailState] = useState({
    mail: "",
    pass: "",
  });
  const [code, setCode] = useState(""); 
  const { loginWithCustomToken } = useUsers();

  const createUser = useMutation<CreateUserResponse, Error, any>({
    // Tipagem da mutação
    mutationFn: async (dadosForm: any) => {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_URL_RENDER}/users/criar-conta`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dadosForm),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        try {
          const errorJson = JSON.parse(errorText);
          throw new Error(errorJson.error || "Erro ao criar conta");
        } catch {
          throw new Error(errorText || "Erro ao criar conta");
        }
      }

      return response.json();
    },
    onSuccess: async (data) => {
      console.log("✅ Conta criada com sucesso (RAW):", JSON.stringify(data));
      let auth_token = data.token;

      if (!auth_token && data.usuario && data.usuario.customToken) {
        auth_token = data.usuario.customToken;
        console.warn(
          " Usando token aninhado: Confirme se o backend está retornando 'token' no nível raiz."
        );
      } 

      if (auth_token) {

        await loginWithCustomToken(auth_token);

        console.log(
          " loginWithCustomToken foi chamado. A busca do perfil deve iniciar em seguida."
        );
      } else {
        console.error(" Token de autenticação ausente na resposta da API.");
      } 
      setStep(2);
    },
    onError: (error: any) => {
      console.error(" Erro ao criar conta:", error.message);
      Alert.alert("Erro ao criar conta", error.message); 
    },
  });

  const verifycode = useMutation({
    mutationFn: async (dadosForm: any) => {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_URL_RENDER}/api/verify-code`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dadosForm),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        try {
          const errorJson = JSON.parse(errorText);
          throw new Error(errorJson.error || "Erro ao verificar código");
        } catch {
          throw new Error(errorText || "Erro ao verificar código");
        }
      }

      return response.json();
    },
    onSuccess: (data) => {
      console.log("✅ Codigo verificado com sucesso:", data);
      router.push("/(tabs)");
    },
    onError: (error: any) => {
      console.error("Erro ao verificar codigo:", error.message);
      Alert.alert("Erro ao verificar código", error.message);
    },
  });

  const steps = [
    <StepName
      formNameState={formNameState}
      setFormNameState={setFormNameState}
      key={"1"}
    />,
    <StepMail
      formPassMailState={formPassMailState}
      setFormPassMailState={setFormPassMailState}
      key={"2"}
    />,
    <StepSenha
      email={formPassMailState.mail}
      setCode={setCode}
      code={code}
      key={"3"}
    />,
  ];

  return (
    <View className="w-full h-full">

      <LinearGradient colors={["#667eea", "#764ba2"]} className="w-full h-full">
   <StepIndicador step={step} total={steps.length} />
        <View className="justify-center items-center">

          <View className="w-10/12 p-5 rounded-2xl bg-white h-3/4">
{steps[step]}
            <View className="flex-row justify-between">
      
              {step > 0 && (
                <TouchableOpacity
                  className="px-4 items-center flex-row gap-2 rounded-md py-3 bg-indigo-500"
                  onPress={() => setStep(step - 1)}
                >
  
                  <MaterialIcons name="chevron-left" color="#fff" size={20} />
       
                  <Text className="text-white font-semibold">Voltar</Text>
        
                </TouchableOpacity>
              )}
      
              {step === 0 ? (
                <TouchableOpacity
                  className="flex-1 items-center flex-row justify-center gap-2 rounded-md py-3 bg-indigo-500"
                  onPress={() => setStep(1)}
                >
           
                  <Text className="text-white font-semibold">Próximo</Text>
             
                  <MaterialIcons name="chevron-right" color="#fff" size={20} />
        
                </TouchableOpacity>
              ) : step === 1 ? (
                <TouchableOpacity
                  className={`px-4 items-center flex-row gap-2 rounded-md py-3 ${
                    createUser.isPending ? "bg-indigo-300" : "bg-indigo-500"
                  }`}
                  onPress={() => {
                    const dados = {
                      nome: formNameState.name,
                      sobrenome: formNameState.sobrenome,
                      email: formPassMailState.mail,
                      senha: formPassMailState.pass,
                    };
                    createUser.mutate(dados);
                  }}
                  disabled={createUser.isPending}
                >
          
                  <Text className="text-white font-semibold">
             
                    {createUser.isPending ? "Criando..." : "Criar Conta"}
              
                  </Text>
       
                  {createUser.isPending && (
                    <MaterialIcons
                      name="hourglass-top"
                      color="#fff"
                      size={20}
                    />
                  )}
           
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  className={`px-5 flex-row items-center gap-2 rounded-md py-3 ${
                    verifycode.isPending ? "bg-indigo-300" : "bg-indigo-500"
                  }`}
                  onPress={() => {
                    const dados = {
                      code: code,
                      email: formPassMailState.mail,
                    };
                    verifycode.mutate(dados);
                  }}
                  disabled={verifycode.isPending}
                >
            
                  <Text className="text-white font-semibold">
               
                    {verifycode.isPending ? "Verificando..." : "Finalizar"}
             
                  </Text>
                
                  {verifycode.isPending && (
                    <MaterialIcons
                      name="hourglass-top"
                      color="#fff"
                      size={20}
                    />
                  )}
             
                </TouchableOpacity>
              )}
       
            </View>
       
          </View>
      
        </View>
   
      </LinearGradient>
  
    </View>
  );
}
