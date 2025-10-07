import { Category } from "@/components/ui/category";
import { Input, InputField } from "@/components/ui/input";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import dayjs from "dayjs";
import { LinearGradient } from "expo-linear-gradient";
import { Calendar, Camera, Clock } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from "react-native-ui-datepicker";

export default function CreateEvent() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selected, setSelected] = useState<DateType>();
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [category, setCategory] = useState();
  const defaultStyles = useDefaultStyles();
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
        <View className="p-5 mt-5">
          <View className="w-full h-40 border-2 border-dashed border-gray-300 rounded-lg justify-center items-center">
            <Camera size={40} color={"#6366F1"} />
            <Text className="text-gray-400">Adicionar imagem do evento</Text>
          </View>
          <View className="mt-5">
            <Text className="text-gray-500 font-semibold text-lg">
              Informações do Evento
            </Text>
            <View className="w-full ">
              <View className="w-full  ">
                <View>
                  <Text className="text-gray-500 font-semibold text-sm mb-1">
                    Nome do Evento
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
                  <InputField placeholder="Como podemos ajudar?" />
                </Input>
              </View>
              <View className="w-full ">
                <View>
                  <Text className="text-gray-500 font-semibold text-sm mb-1">
                    Descrição do Evento
                  </Text>
                </View>
                <Textarea
                  size="md"
                  isReadOnly={false}
                  isInvalid={false}
                  isDisabled={false}
                  className="w-full"
                >
                  <TextareaInput placeholder="Descreva seu evento aqui..." />
                </Textarea>
              </View>
            </View>
          </View>
        </View>
        <View className="w-full ">
          <Category setCategory={() => setCategory} />
        </View>

        <View className="w-full p-5">
          <View>
            <Text>Data e Horário</Text>
          </View>
          <View className="w-full flex-row gap-3 mt-3">
            <View className=" flex-1">
              <Text>Data</Text>
              <View className="flex-1">
                <TouchableOpacity
                  onPress={() => setDatePickerVisible(true)}
                  className=" border border-background-100 flex-row justify-between bg-white/50 rounded-lg h-12 items-center px-3"
                >
                  <Calendar size={20} color={"#6b7280"} className=" " />
                  <View className=" flex-1 items-center justify-center">
                    <Text className="text-lg text-gray-500">
                      {selected
                        ? dayjs(selected).format("DD/MM/YYYY")
                        : "Add uma data"}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View className=" flex-1">
              <Text>Hora</Text>
              <View className="flex-1">
                <TouchableOpacity className=" border border-background-100 flex-row justify-between bg-white/50 rounded-lg h-12 items-center px-3">
                  <Clock size={20} color={"#6b7280"} />
                  <View className=" flex-1 items-center justify-center">
                    <Text className="text-lg text-gray-500">
                      Adicionar horário
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View className="w-full p-5">
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
        </View>
      </ScrollView>
      {datePickerVisible && (
        <View className=" w-full h-full  absolute top-0 left-0  justify-center items-center">
          <LinearGradient
            colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.6)"]}
            className=" w-full h-full absolute top-0 left-0 z-10 justify-center items-center"
            style={{ flex: 1 }}
          >
            <View className=" m-5 rounded-md z-20  bg-white top-0 left-0 right-0">
              <DateTimePicker
                mode="single"
                date={selected}
                onChange={({ date }) => {
                  if (date) {
                    setSelected(date);
                    setDatePickerVisible(false);
                  }
                }}
                styles={defaultStyles}
                locale="pt-BR"
                maxDate={new Date()}
              />
            </View>
          </LinearGradient>
        </View>
      )}
    </View>
  );
}
