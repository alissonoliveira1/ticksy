import { Input, InputField } from "@/components/ui/input";
import { User } from "lucide-react-native";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";

interface IFormInput {
  nome: string;
  sobrenome: string;
}

interface StepNameProps {
  formNameState: {
    name: string;
    sobrenome: string;
  };
  setFormNameState: React.Dispatch<
    React.SetStateAction<{ name: string; sobrenome: string }>
  >;
}

export const StepName = ({ formNameState, setFormNameState }: StepNameProps) => {
  const { control } = useForm<IFormInput>({
    defaultValues: {
      nome: formNameState.name,
      sobrenome: formNameState.sobrenome,
    },
  });

  return (
    <View className="flex-1 justify-center items-center">
      <View className="bg-white w-full h-full rounded-2xl ">
        <View className="justify-center items-center">
          <User color="#4f46e5" size={50} />
        </View>
        <View className="items-center mt-4">
          <Text className="text-xl font-bold">Como devemos te chamar?</Text>
        </View>
        <View className="items-center mt-1">
          <Text>Digite seu nome completo</Text>
        </View>

        <View className="pt-16 gap-4">
          {/* Campo Nome */}
          <View className="w-full pb-3">
            <Text className="text-gray-500 font-semibold text-base mb-1">Nome</Text>
            <Controller
              control={control}
              name="nome"
              render={({ field: { onChange, value } }) => (
                <Input
                  className="border border-gray-200 bg-white/50"
                  variant="outline"
                  size="xl"
                >
                  <InputField
                    placeholder="Digite seu nome"
                    value={formNameState.name}
                    onChangeText={(text) => {
                      onChange(text);
                      setFormNameState({ ...formNameState, name: text });
                    }}
                  />
                </Input>
              )}
            />
          </View>

          {/* Campo Sobrenome */}
          <View className="w-full pb-3">
            <Text className="text-gray-500 font-semibold text-base mb-1">
              Sobrenome
            </Text>
            <Controller
              control={control}
              name="sobrenome"
              render={({ field: { onChange, value } }) => (
                <Input
                  className="border border-gray-200 bg-white/50"
                  variant="outline"
                  size="xl"
                >
                  <InputField
                    placeholder="Digite seu sobrenome"
                    value={formNameState.sobrenome}
                   
                    onChangeText={(text) => {
                      onChange(text);
                      setFormNameState({ ...formNameState, sobrenome: text });
                    }}
                  />
                </Input>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
