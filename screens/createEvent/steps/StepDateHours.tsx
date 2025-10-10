import { ModalDate } from "@/components/ui/modalDate";
import { ModalTime } from "@/components/ui/modalTime";
import dayjs from "dayjs";
import { Calendar, Clock } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { DateType } from "react-native-ui-datepicker";

export const StepDateHours = ({ event, setEvent }: any) => {
  const [selectedDateStart, setSelectedDateStart] =
    useState<DateType>(undefined);
  const [selectedDateEnd, setSelectedDateEnd] = useState<DateType>(undefined);
  const [selectedHrsStart, setSelectedHrsStart] = useState<Date | undefined>(
    undefined
  );
  const [selectedHrsEnd, setSelectedHrsEnd] = useState<Date | undefined>(
    undefined
  );
  const [timePickerVisibleStart, setTimePickerVisibleStart] = useState(false);
  const [timePickerVisibleEnd, setTimePickerVisibleEnd] = useState(false);
  const [datePickerVisibleStart, setDatePickerVisibleStart] = useState(false);
  const [datePickerVisibleEnd, setDatePickerVisibleEnd] = useState(false);
                              
  return (
    <View className="w-full bg-gray-50 h-screen p-5">
  <Text className="text-xl font-bold mb-4">Data e Horário</Text>

  {/* Início */}
  <View className="mb-10">
    <Text className="mb-2 text-lg font-semibold">Início</Text>
    <View className="flex-row gap-3">
      {/* Data */}
      <View className="flex-1">
        <Text>Data</Text>
        <TouchableOpacity
          onPress={() => setDatePickerVisibleStart(true)}
          className="border border-background-100 flex-row justify-between bg-white/50 rounded-lg h-12 items-center px-3"
        >
          <Calendar size={20} color={"#6b7280"} />
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg text-gray-500">
              {selectedDateStart
                ? dayjs(selectedDateStart).format("DD/MM/YYYY")
                : "Add uma data"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Hora */}
      <View className="flex-1">
        <Text>Hora</Text>
        <TouchableOpacity
          onPress={() => setTimePickerVisibleStart(true)}
          className="border border-background-100 flex-row justify-between bg-white/50 rounded-lg h-12 items-center px-3"
        >
          <Clock size={20} color={"#6b7280"} />
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg text-gray-500">
              {selectedHrsStart
                ? dayjs(selectedHrsStart).format("HH:mm")
                : "Add uma hora"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>

  {/* Término */}
  <View className="mt-10">
    <Text className="mb-2 text-lg font-semibold">Término</Text>
    <View className="flex-row gap-3">
      {/* Data */}
      <View className="flex-1">
        <Text>Data</Text>
        <TouchableOpacity
          onPress={() => setDatePickerVisibleEnd(true)}
          className="border border-background-100 flex-row justify-between bg-white/50 rounded-lg h-12 items-center px-3"
        >
          <Calendar size={20} color={"#6b7280"} />
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg text-gray-500">
              {selectedDateEnd
                ? dayjs(selectedDateEnd).format("DD/MM/YYYY")
                : "Add uma data"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Hora */}
      <View className="flex-1">
        <Text>Hora</Text>
        <TouchableOpacity
          onPress={() => setTimePickerVisibleEnd(true)}
          className="border border-background-100 flex-row justify-between bg-white/50 rounded-lg h-12 items-center px-3"
        >
          <Clock size={20} color={"#6b7280"} />
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg text-gray-500">
              {selectedHrsEnd
                ? dayjs(selectedHrsEnd).format("HH:mm")
                : "Add uma hora"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>



      <ModalDate
  selectedDate={selectedDateStart}
  setSelectedDate={setSelectedDateStart}
  datePickerVisible={datePickerVisibleStart}
  setDatePickerVisible={setDatePickerVisibleStart}
/>

<ModalDate
  selectedDate={selectedDateEnd}
  setSelectedDate={setSelectedDateEnd}
  datePickerVisible={datePickerVisibleEnd}
  setDatePickerVisible={setDatePickerVisibleEnd}
/>
      <ModalTime
        visible={timePickerVisibleStart}
        value={selectedHrsStart ?? new Date()}
        onClose={() => setTimePickerVisibleStart(false)}
        onChange={setSelectedHrsStart}
      />
      <ModalTime
        visible={timePickerVisibleEnd}
        value={selectedHrsEnd ?? new Date()}
        onClose={() => setTimePickerVisibleEnd(false)}
        onChange={setSelectedHrsEnd}
      />
    </View>
  );
};
