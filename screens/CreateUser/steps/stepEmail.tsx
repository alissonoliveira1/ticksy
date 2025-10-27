import { Input, InputField } from "@/components/ui/input";
import { Mail } from "lucide-react-native";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";

interface IFormInput {
  mail: string;
  pass: string;
}
interface StepNameProps {
  formPassMailState: {
    mail: string;
    pass: string;
  };
  setFormPassMailState: React.Dispatch<
    React.SetStateAction<{ mail: string; pass: string }>
  >;
}
export const StepMail = ({
  formPassMailState,
  setFormPassMailState,
}: StepNameProps) => {
  const [repeatPass, setRepeatPass] = useState("")
  const { control } = useForm<IFormInput>({
    defaultValues: {
      mail: formPassMailState.mail,
      pass: formPassMailState.pass,
    },
  });


  if( formPassMailState.pass === repeatPass ){
    console.log("senhas iguais")
  
    
  }else{
    console.log("senhas diferentes")
   
  }

  return (
    <View className="flex-1">
      <View className="justify-center items-center">
        <Mail color="#4f46e5" size={50} />
      </View>
      <View className="items-center mt-4">
        <Text className="text-xl font-bold">Qual o seu email?</Text>
      </View>
      <View className="items-center mt-1">
        <Text>Usaremos para login e notificações</Text>
      </View>
      <View>
        <View className="w-full pt-10 ">
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
                    setFormPassMailState({ ...formPassMailState, mail: text });
                  }}
                  placeholder="seu@gmail.com"
                />
              </Input>
            )}
          />
        </View>
        <View className="w-full pt-3 ">
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
              setFormPassMailState({ ...formPassMailState, pass: text });
            }}
            
            placeholder="sua senha" />
          </Input>)}
            />
         
        </View>
        <View className="w-full pt-3 ">
          <View>
            <Text className="text-gray-500 font-semibold text-base mb-1">
              Repita a senha
            </Text>
          </View>
          <Input
            className="  border border-gray-200 bg-white/50"
            variant="outline"
            size="xl"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField
            value={repeatPass}
            onChangeText={(text) => setRepeatPass(text)}
            placeholder="repita sua senha" />
          </Input>
        </View>
      </View>
    </View>
  );
};
