
import { StepIndicator } from "@/screens/createEvent/StepIndicator";
import { InformationBasic } from "@/screens/createEvent/steps/informationBasic";
import { StepDateHours } from "@/screens/createEvent/steps/StepDateHours";
import { StepLocal } from "@/screens/createEvent/steps/StepLocal";
import { StepPagaments } from "@/screens/createEvent/steps/StepPagaments";
import { StepResume } from "@/screens/createEvent/steps/stepResume";
import { StepTicket } from "@/screens/createEvent/steps/StepTicket";
import { StepVisual } from "@/screens/createEvent/steps/StepVisual";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";


export default function CreateEvent() {
  const [step, setStep] = useState(0);
    const [event, setEvent] = useState<any>({});
  const steps = [
    <InformationBasic key="1" event={event} setEvent={setEvent} />,
    <StepLocal key="2" event={event} setEvent={setEvent} />,
    <StepDateHours key="3" event={event} setEvent={setEvent} />,
    <StepTicket key="4" event={event} setEvent={setEvent} />,
    <StepPagaments key="5" event={event} setEvent={setEvent} />,
    <StepVisual key="6" event={event} setEvent={setEvent} />,
    <StepResume key="7" event={event} />,
  ];
  return (
    <View>
      <ScrollView>
        <View className="w-full ">
          <View className=" flex-row bg-transparent rounded-b-[3rem] overflow-hidden">
            <LinearGradient
              colors={["#6366F1", "#8B5CF6"]}
              className=" p-5 flex-row items-center rounded-b-[3rem] "
              style={{ flex: 1 }}
            >
              <View className="items-center justify-center pt-5  flex-1">
                <View className="pb-1">
                  <Text className="text-white font-bold text-xl">
                    Criar Evento
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
        
       

       <View className="flex-1 bg-white">
      <StepIndicator step={step} total={steps.length} />
      {steps[step]}

    
      <View className="flex-row justify-between p-4">
        {step > 0 && (
          <Button title="Voltar" onPress={() => setStep(step - 1)} />
        )}
        {step < steps.length - 1 ? (
          <Button title="Próximo" onPress={() => setStep(step + 1)} />
        ) : (
          <Button title="Publicar Evento" onPress={() => handleSubmit()} />
        )}
      </View>
    </View>
       
     
    
      </ScrollView>
     
    </View>
  );
   function handleSubmit() {
    console.log("Evento pronto para enviar:", event);
    // Aqui você pode chamar sua API POST /eventos
  }
}
