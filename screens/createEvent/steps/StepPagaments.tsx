import { useState } from "react";
import { Switch, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { Input, InputField } from "@/components/ui/input";
export const StepPagaments = ({ event, setEvent }: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View className="w-full bg-gray-50 p-5 mb-10">
      <View>
        <Text className="text-gray-600 font-semibold text-lg mb-5">
          Formas de Pagamento
        </Text>
      </View>
     <View className="w-full bg-white  rounded-md">
       <View className="flex-row justify-between px-3 bg-white items-center rounded-md my-4">
        <View>
          <MaterialIcons name="pix" size={24} color="#6366f1" />
        </View>
       <View className="flex-1 pl-4">
          <Text className="text-gray-500 text-base font-semibold">PIX</Text>
          <Text className="text-gray-400 text-sm">Aprovação instantânea</Text>
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
      <View className="flex-row justify-between px-3 bg-white items-center rounded-md my-4">
        <View>
          <MaterialIcons name="credit-card" size={24} color="#6366f1" />
        </View>
        <View className="flex-1 pl-4">
          <Text className="text-gray-500 text-base font-semibold">
            Cartão de Crédito
          </Text>
          <Text className="text-gray-400 text-sm">Visa, Mastercard, Elo</Text>
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

      <View className="flex-row justify-between px-3 bg-white items-center rounded-md my-4">
        <View>
          <MaterialIcons name="account-balance" size={24} color="#6366f1" />
        </View>
        <View className="flex-1 pl-4">
          <Text className="text-gray-500 text-base font-semibold">
            Cartão de Débito
          </Text>
          <Text className="text-gray-400 text-sm">Débito em conta</Text>
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
      <View className="w-full  my-5">
            <View>
              <Text className="text-gray-500 font-semibold text-base mb-1">
                Conta de recebimento
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
              <InputField placeholder="CPF ou CNPJ para o recebimento" />
            </Input>
          </View>
      <View className="w-full  ">
            <View>
              <Text className="text-gray-500 font-semibold text-base mb-1">
                Politicas de reembolso (opcional)
              </Text>
            </View>
            <Textarea
              size="md"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
              className="w-full"
            >
              <TextareaInput placeholder="Descreva as condições de reembolso..." />
            </Textarea>
          </View>
    </View>
  );
};
