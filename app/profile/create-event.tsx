import { StepIndicator } from "@/screens/createEvent/StepIndicator";
import { InformationBasic } from "@/screens/createEvent/steps/informationBasic";
import { StepDateHours } from "@/screens/createEvent/steps/StepDateHours";
import { StepLocal } from "@/screens/createEvent/steps/StepLocal";
import { StepPagaments } from "@/screens/createEvent/steps/StepPagaments";
import { StepResume } from "@/screens/createEvent/steps/StepResume";
import { StepTicket } from "@/screens/createEvent/steps/StepTicket";
import { StepVisual } from "@/screens/createEvent/steps/StepVisual";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { goBack } from "expo-router/build/global-state/routing";
import { ArrowUpToLine, ChevronLeft } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function CreateEvent() {
  const [step, setStep] = useState(0);
  const [event, setEvent] = useState<any>({});
  const steps = [
    <InformationBasic key="1" event={event} setEvent={setEvent} />,
    <StepLocal key="2" event={event} setEvent={setEvent} />,
    <StepDateHours key="3" event={event} setEvent={setEvent} />,
    <StepTicket key="4" event={event} setEvent={setEvent} />,
    <StepPagaments key="5" event={event} setEvent={setEvent} />,
    <StepResume key="6" event={event} />,
  ];
  return (
    <View className=" bg-gray-50">
      <View className="w-full ">
        <View className=" flex-row bg-transparent rounded-b-[3rem] overflow-hidden">
          <LinearGradient
            colors={["#6366F1", "#8B5CF6"]}
            className=" p-5 flex-row items-center relative rounded-b-[3rem] "
            style={{ flex: 1 }}
          >
            <View className="items-center justify-center pt-8   flex-1">
              <View className="absolute left-3 items-center  h-full top-6">
                <TouchableOpacity onPress={goBack} className="p-2 rounded-[4rem] bg-white/20">
                  <ChevronLeft color="#ffffff" size={24} />
                </TouchableOpacity>

              </View>
              <View className="pb-1">
                <Text className="text-white font-bold text-xl">
                  Criar Evento
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>

      <View className=" w-full h-screen ">
        <StepIndicator step={step} total={steps.length} />
        {steps[step]}

        <View className="bottom-12 pb-3 absolute w-full bg-white border-t border-gray-200 elevation-sm">
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
                className={`px-4 ${step > 0 ? '' : 'flex-1 justify-center'} items-center flex-row gap-2 rounded-md elevation-sm py-3 bg-indigo-500`}
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
                onPress={() => handleSubmit()}
              >
                <MaterialIcons name="publish" color="#ffffff" size={17} />
                <Text className="text-white font-semibold ">
                  Publicar Evento
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
  function handleSubmit() {
    console.log("Evento pronto para enviar:", event);
    // Aqui você pode chamar sua API POST /eventos
  }
}
