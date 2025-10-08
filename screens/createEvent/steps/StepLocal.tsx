import { Input, InputField } from "@/components/ui/input";
import { useState } from "react";
import { Switch, Text, View } from "react-native";

export const StepLocal = ({event, setEvent}:any) => {
    const [isEnabled, setIsEnabled] = useState(false);
  return ( <View className="w-full p-5">
          <View>
            <Text>Localização</Text>
          </View>
          <View>
            <View className="w-full  ">
              <View>
                <Text className="text-gray-500 font-semibold text-sm mb-1">
                  Local do evento
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
                <InputField placeholder="Ex: teatro Jorge amado" />
              </Input>
            </View>
            <View className="w-full  ">
              <View>
                <Text className="text-gray-500 font-semibold text-sm mb-1">
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
                <InputField placeholder="CEP do local do evento" />
              </Input>
            </View>
            <View className="w-full  ">
              <View>
                <Text className="text-gray-500 font-semibold text-sm mb-1">
                  Endereço
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
                <InputField placeholder="Endereço completo do local " />
              </Input>
            </View>
            <View className="w-full  ">
              <View>
                <Text className="text-gray-500 font-semibold text-sm mb-1">
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
                <InputField placeholder="Estado da realização do evento " />
              </Input>
            </View>
            <View className="w-full  ">
              <View>
                <Text className="text-gray-500 font-semibold text-sm mb-1">
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
            <View className="flex-row justify-between items-center px-1 my-3">
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
          </View>
        </View>);
}