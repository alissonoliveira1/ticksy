import { useState } from "react";
import { Switch, Text, View } from "react-native";

export const StepResume = ({event, setEvent}:any) => {
    const [isEnabled, setIsEnabled] = useState(false);
  return (
        <View className="w-full bg-gray-50 p-5 mb-10">
          <View>
            <Text>Público e Regras</Text>
          </View>

          <View>
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
          </View>
        </View>
  );
}