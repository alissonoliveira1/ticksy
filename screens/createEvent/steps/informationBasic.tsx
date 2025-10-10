import { Category } from "@/components/ui/category";
import { Input, InputField } from "@/components/ui/input";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { Building2, Camera } from "lucide-react-native";
import { useState } from "react";
import { Text, View } from "react-native";

export const InformationBasic = ({ event, setEvent }: any) => {
  const [category, setCategory] = useState("");
  return (
    <View className="p-3 bg-gray-50 ">
      <View className="mb-5">
           <Text className="text-gray-600 font-semibold text-lg">
          Informações do Evento
        </Text>
      </View>
      <View style={{borderColor:'#d1d5db',borderStyle:'dashed' ,  borderWidth:2, borderRadius:10,}} className="w-full h-40  justify-center items-center">
        <Camera size={40} color={"#6366F1"} />
        <Text className="text-gray-400">Adicionar imagem do evento</Text>
      </View>
      <View className="mt-5">
     
        <View className="w-full ">
          <View className="w-full  ">
            <View>
              <Text className="text-gray-500 font-semibold text-base mb-1">
                Nome do Evento
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
              <InputField placeholder="Como podemos ajudar?" />
            </Input>
          </View>
          <View className="w-full ">
            <Category setCategory={() => setCategory} />
          </View>
          <View className="w-full  ">
            <View>
              <Text className="text-gray-500 font-semibold text-base mb-1">
                Descrição do Evento
              </Text>
            </View>
            <Textarea
              size="md"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
              className="w-full"
            >
              <TextareaInput placeholder="Descreva seu evento aqui..." />
            </Textarea>
          </View>
        </View>
      </View>
      <View className="mt-5 ">
        <View>
          <Text className="text-gray-500 font-semibold text-base mb-1">
            Logo do Evento (opcional)
          </Text>
        </View>
        <View className="w-full h-20 border-2 border-dashed border-gray-300 rounded-lg justify-center items-center">
          <Building2 size={30} color={"#6366F1"} />
          <Text className="text-gray-400">Adicionar logo do evento</Text>
        </View>
      </View>
    </View>
  );
};
