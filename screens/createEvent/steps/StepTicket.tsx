import { Input, InputField } from "@/components/ui/input";
import { Text, TouchableOpacity, View } from "react-native";

export const StepTicket = ({event, setEvent}:any) => {
  return (   <View className="w-full p-5 mb-10">
          <View>
            <Text>Ingressos</Text>
          </View>
          <View className="w-full  ">
            <View>
              <Text className="text-gray-500 font-semibold text-sm mb-1">
                Tipo de ingresso
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
          <View className="w-full  ">
            <View>
              <Text className="text-gray-500 font-semibold text-sm mb-1">
                preço (R$)*
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
          <View className="w-full  ">
            <View>
              <Text className="text-gray-500 font-semibold text-sm mb-1">
                quantidade de ingressos
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
          <View>
            <TouchableOpacity className="w-full bg-purple-600 rounded-lg h-12 justify-center items-center mt-5">
              <Text className="text-white font-semibold text-lg">
                Adicionar novo tipo de ingresso
              </Text>
            </TouchableOpacity>
          </View>
        </View>);
}