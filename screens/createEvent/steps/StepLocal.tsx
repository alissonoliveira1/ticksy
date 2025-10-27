import { Input, InputField } from "@/components/ui/input";
import { useState } from "react";
import { Switch, Text, View } from "react-native";

export const StepLocal = ({ event, setEvent }: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View className="w-full bg-gray-50 flex-1 h-full p-5">
      <View>
        <Text className=" text-gray-600 font-semibold text-lg">Localização</Text>
      </View>
       <View className="flex-row justify-between px-3 bg-white items-center rounded-md my-4">
          <View>
            <Text className="text-gray-500 text-base font-semibold">
              Evento Online
            </Text>
            <Text className="text-gray-400 text-sm">
              Caso o evento seja online, ative essa opção
            </Text>
          </View>

          <View>
            <Switch
              thumbColor={"#ffffff"}
              trackColor={{ false: "#d1d5db", true: "#6366f1" }}
              value={isEnabled}
              onValueChange={setIsEnabled}
            />
          </View>
        </View>
      
      <View className="bg-white p-3 rounded-md">
        <View className="flex-row justify-between gap-2 space-x-2 pb-3">
          <View className="flex-1  ">
          <View>
            <Text className="text-gray-500 font-semibold text-base mb-1">
              CEP
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
            <InputField placeholder="CEP do local " />
          </Input>
        </View>
        <View className="flex-1  ">
          <View>
            <Text className="text-gray-500 font-semibold text-base mb-1">
              Estado
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
            <InputField placeholder="Estado " />
          </Input>
        </View>
        </View>
        <View className="w-full pb-3 ">
          <View>
            <Text className="text-gray-500 font-semibold text-base mb-1">
              Endereço completo
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
            <InputField placeholder="Rua, numero e bairro" />
          </Input>
        </View>
        
        <View className="w-full  ">
          <View>
            <Text className="text-gray-500 font-semibold text-base mb-1">
              Cidade
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
            <InputField placeholder="Cidade da realização do evento " />
          </Input>
        </View>
      
       
      </View>
    </View>
  );
};
