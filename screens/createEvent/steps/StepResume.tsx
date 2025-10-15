import { Input, InputField } from "@/components/ui/input";
import { useState } from "react";
import { Switch, Text, View } from "react-native";

export const StepResume = ({ event, setEvent }: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View className="w-full bg-gray-50 p-5 mb-10">
      <View>
        <Text className="text-gray-500 font-semibold text-lg mb-3">Público e Regras</Text>
      </View>

      <View className="w-full bg-white p-3 rounded-md mb-5">
        <View className="flex-row justify-between items-center px-1 my-3">
          <View className="flex-1">
            <Text className="text-gray-500 text-base font-semibold">
              Permitir match/chat no evento
            </Text>
            <Text className="text-gray-400 text-sm">
              Caso o ativado o publico poderá interagir entre si no evento
            </Text>
          </View>

          <View className="ml-3">
            <Switch
              thumbColor={"#ffffff"}
              trackColor={{ false: "#d1d5db", true: "#6366f1" }}
              value={isEnabled}
              onValueChange={setIsEnabled}
            />
          </View>
        </View>
        <View className="flex-row justify-between items-center px-1 my-3">
          <View className="flex-1">
            <Text className="text-gray-500 text-base font-semibold">
              Evento para universitários apenas
            </Text>
            <Text className="text-gray-400  text-sm">
              Caso o evento seja apenas para universitarios, ative essa opção
            </Text>
          </View>

          <View className="ml-3">
            <Switch
              thumbColor={"#ffffff"}
              trackColor={{ false: "#d1d5db", true: "#6366f1" }}
              value={isEnabled}
              onValueChange={setIsEnabled}
            />
          </View>
        </View>
        <View className="flex-row justify-between items-center px-1 my-3">
          <View className="flex-1">
            <Text className="text-gray-500 text-base font-semibold">
              Mostrar Contador de Ingressos
            </Text>
            <Text className="text-gray-400  text-sm">
              Exibir quantos ingressos restam
            </Text>
          </View>

          <View className="ml-3">
            <Switch
              thumbColor={"#ffffff"}
              trackColor={{ false: "#d1d5db", true: "#6366f1" }}
              value={isEnabled}
              onValueChange={setIsEnabled}
            />
          </View>
        </View>
      </View>
      <View>
        <View className="mt-5 mb-3">
          <Text className="text-gray-500 font-semibold text-lg mb-3">
            Informações do Organizador
          </Text>
        </View>
        <View className="w-full  ">
          <View>
            <Text className="text-gray-500 font-semibold text-base mb-1">
              Nome/Empresa
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
            <InputField placeholder="Nome do(a) organizador/empresa" />
          </Input>
        </View>
        <View className="flex-row mt-4">
          <View className="w-full flex-1   ">
          <View>
            <Text className="text-gray-500 font-semibold text-base mb-1">
              CPF/CNPJ
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
            <InputField placeholder="000.000.000-00" />
          </Input>
        </View>
        <View className="w-full  flex-1 ml-3">
          <View>
            <Text className="text-gray-500 font-semibold text-base mb-1">
              Numero de Contato
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
            <InputField placeholder="(71) 99999-9999" />
          </Input>
        </View>
        </View>
      </View>
    </View>
  );
};
