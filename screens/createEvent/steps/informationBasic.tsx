import { Category } from "@/components/ui/category";
import { Input, InputField } from "@/components/ui/input";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { Camera } from "lucide-react-native";
import { useState } from "react";
import { Text, View } from "react-native";

export const InformationBasic = ({ event, setEvent }: any) => {
  const [category, setCategory] = useState("");
  return (
    <View className="p-5 mt-5">
      <View className="w-full h-40 border-2 border-dashed border-gray-300 rounded-lg justify-center items-center">
        <Camera size={40} color={"#6366F1"} />
        <Text className="text-gray-400">Adicionar imagem do evento</Text>
      </View>
      <View className="mt-5">
        <Text className="text-gray-500 font-semibold text-lg">
          Informações do Evento
        </Text>
        <View className="w-full ">
          <View className="w-full  ">
            <View>
              <Text className="text-gray-500 font-semibold text-sm mb-1">
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
          <View className="w-full ">
            <View>
              <Text className="text-gray-500 font-semibold text-sm mb-1">
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
    </View>
  );
};
