import { StepIndicador } from "@/screens/CreateUser/stepIndicador";
import { StepMail } from "@/screens/CreateUser/steps/stepEmail";
import { StepName } from "@/screens/CreateUser/steps/stepName";
import { StepSenha } from "@/screens/CreateUser/steps/stepSenha";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const steps = [
    <StepName key={"1"} />,
    <StepMail key={"2"} />,
    <StepSenha key={"3"} />,
  ];
  return (
    <View className="w-full h-screen ">
        <LinearGradient
        colors={['#667eea', '#764ba2']}
        className=" w-full h-screen "
        >

      
      <StepIndicador step={step} total={steps.length} />
      {steps[step]}



   <View className="bottom-12 pb-3 absolute w-full ">
          <View className="flex-row flex-1  justify-between px-5 py-3">
            {step > 0 && (
              <TouchableOpacity
                activeOpacity={1}
                className="px-4 items-center flex-row gap-2 rounded-md elevation-sm py-3 bg-indigo-500"
                onPress={() => setStep(step - 1)}
              >
                <MaterialIcons
                  name="chevron-left"
                  color="#ffffff"
                  size={20}
                  
                /><Text className="text-white font-semibold ">Voltar</Text>
              </TouchableOpacity>
            )}
            {step < steps.length - 1 ? (
              <TouchableOpacity
                activeOpacity={1}
                className="px-4 items-center flex-row gap-2 rounded-md elevation-sm py-3 bg-indigo-500"
                onPress={() => setStep(step + 1)}
              >
                <Text className="text-white font-semibold ">Próximo</Text>
                <MaterialIcons
                  name="chevron-right"
                  color="#ffffff"
                  size={20}

                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={1}
                className="px-5 flex-row items-center gap-2 rounded-md elevation-sm py-3 bg-indigo-500"
                
              >
                <MaterialIcons name="publish" color="#ffffff" size={17} />
                <Text className="text-white font-semibold ">
                  Finalizar
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>  
        </LinearGradient>
    </View>
  );
}
