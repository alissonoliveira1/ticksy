import dayjs from "dayjs";
import { LinearGradient } from "expo-linear-gradient";
import { Calendar, Clock } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePicker, { DateType, useDefaultStyles } from "react-native-ui-datepicker";

export const StepDateHours = ({event, setEvent}:any) => {
    const [selected, setSelected] = useState<DateType>(null);
    const [datePickerVisible, setDatePickerVisible] = useState(false);
const defaultStyles = useDefaultStyles();
  return (  <View className="w-full p-5">
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
          </View>);
}