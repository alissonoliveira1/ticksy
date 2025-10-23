
import { Text ,View} from "react-native";

interface StepIndicadorProps {
  step: number;
  total: number;
}

export const StepIndicador = ({ step, total }: StepIndicadorProps) => {
  return (
    <View className="mt-20">
     <View className="pl-2">
         <View>
        <Text className="text-3xl text-white font-bold">Criar Conta</Text>
      </View>
<View>
    
      <Text className="text-gray-200 text-lg   my-1">
        Etapa {step + 1} de {total}
      </Text>
</View>
     </View>
<View className="gap-1 px-1 mt-5 flex-row w-full">
     <View className={`flex-1 ${step < 0 ? 'bg-gray-300' : 'bg-white'} h-1`}></View>
     <View className={`flex-1 ${step < 1 ? 'bg-gray-300' : 'bg-white'} h-1`}></View>
     <View className={`flex-1 ${step < 2 ? 'bg-gray-300' : 'bg-white'} h-1`}></View>
</View>
    </View>
  );
};
