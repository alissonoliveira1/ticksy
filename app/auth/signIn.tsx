import { Input, InputField } from "@/components/ui/input";
import { useUsers } from "@/context/users/UsersContext";
import { useMutation } from "@tanstack/react-query";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
interface IFormInput {
  mail: string;
  pass: string;
  
}
interface CreateUserResponse {
  message: string;
  usuario: any; 
  token: string; 
}

export default function SignIn() {
    const { loginWithCustomToken } = useUsers();
  const [formPassMailState, setFormPassMailState] = useState<IFormInput>({
    mail: "",
    pass: "",
  });
  const { control } = useForm<IFormInput>({
    defaultValues: {
      mail: "",
      pass: "",
    },
  });
  console.log("Form State:", formPassMailState);
  const handleLogin = useMutation<CreateUserResponse, Error ,any>({
  
   mutationFn: async (dados) => {

    
      const response = await fetch(
        "https://ticksy-backend-ndkb.onrender.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( {
        email: dados.mail,      
        senha: dados.pass, }),
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
         console.log(" Conta criada com sucesso (RAW):", JSON.stringify(data));
         let auth_token = data.token;
   
         if (!auth_token && data.usuario && data.usuario.customToken) {
           auth_token = data.usuario.customToken;
           console.warn(
             " Usando token aninhado: Confirme se o backend está retornando 'token' no nível raiz."
           );
         } 
   
         if (auth_token) {
   
           await loginWithCustomToken(auth_token);
           router.replace("/(tabs)");
           console.log(
             " loginWithCustomToken foi chamado. A busca do perfil deve iniciar em seguida."
           );
         } else {
           console.error("Token de autenticação ausente na resposta da API.");
         } 
       
       },
       onError: (error: any) => {
         console.error(" Erro ao criar conta:", error.message);
      
       },
   

  })
  
  return (
    <View className="flex-1">
      <LinearGradient colors={["#667eea", "#764ba2"]} className="w-full h-full">
        <View className="pt-20 pl-5">
          <Text className="text-3xl text-white font-bold">
            Bem-vindo de volta!
          </Text>
          <Text className="text-gray-100 ">Entre para continuar</Text>
        </View>
        <View className="w-full h-full pt-10 items-center">
          <View className="bg-white w-11/12 h-auto rounded-3xl p-5">
            <View className="w-full  ">
              <View>
                <Text className="text-gray-500 font-semibold text-base mb-1">
                  Email
                </Text>
              </View>
              <Controller
                control={control}
                name="mail"
                render={({ field: { onChange, value } }) => (
                  <Input
                    className="  border border-gray-200 bg-white/50"
                    variant="outline"
                    size="xl"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                  >
                    <InputField
                      value={formPassMailState.mail}
                      onChangeText={(text) => {
                        onChange(text);
                        setFormPassMailState({
                          ...formPassMailState,
                          mail: text,
                        });
                      }}
                      placeholder="seu@gmail.com"
                    />
                  </Input>
                )}
              />
            </View>
            <View className="w-full pt-5 ">
              <View>
                <Text className="text-gray-500 font-semibold text-base mb-1">
                  Senha
                </Text>
              </View>
              <Controller
                control={control}
                name="pass"
                render={({ field: { onChange, value } }) => (
                  <Input
                    className="  border border-gray-200 bg-white/50"
                    variant="outline"
                    size="xl"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                  >
                    <InputField
                      value={formPassMailState.pass}
                      onChangeText={(text) => {
                        onChange(text);
                        setFormPassMailState({
                          ...formPassMailState,
                          pass: text,
                        });
                      }}
                      placeholder="sua senha"
                    />
                  </Input>
                )}
              />
              <View className="w-full pt-2 items-end">
                <Text>Esqueceu a senha?</Text>
              </View>
            </View>

              <View className="w-full">
              <TouchableOpacity onPress={() => {
                    const dados: IFormInput = {
                      mail: formPassMailState.mail,
                      pass: formPassMailState.pass,
                    };
                    handleLogin.mutate(dados);
                  }}
                  disabled={handleLogin.isPending}
                 className="bg-indigo-600  mt-10 rounded-lg py-3 w-full items-center">
                <Text className="text-white font-semibold text-lg">Entrar</Text>
              </TouchableOpacity>
            </View>
            <View className="justify-center items-center w-full pt-5">
              <Text>ou continue com</Text>
            </View>
            <View className="w-full pt-10 flex-row justify-evenly">
              <View className="w-10 h-10">
         
                <Image
                  style={{ width: "100%", height: "100%" }}
                  contentFit="contain"
                  source={require("@/assets/images/googleIcon.png")}
                />
              </View>
              <View className="w-10 h-10">
                <Image
                  style={{ width: "100%", height: "100%" }}
                  contentFit="contain"
                  source={require("@/assets/images/facebookIcon.png")}
                />
              </View>
            </View>
            <View className="flex-row w-full justify-center mt-10">
                <Text>Não tem uma conta? </Text><Text className="text-indigo-500">
                    Cadastre-se
                </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
