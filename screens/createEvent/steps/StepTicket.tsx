import { Input, InputField } from "@/components/ui/input";
import { ModalDate } from "@/components/ui/modalDate";
import dayjs from "dayjs";
import { Calendar, Plus, X } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { DateType } from "react-native-ui-datepicker";

export const StepTicket = ({ event, setEvent }: any) => {
  const [selectedDateStart, setSelectedDateStart] =
    useState<DateType>(undefined);
  const [selectedDateEnd, setSelectedDateEnd] = useState<DateType>(undefined);
  const [datePickerVisibleStart, setDatePickerVisibleStart] = useState(false);
  const [datePickerVisibleEnd, setDatePickerVisibleEnd] = useState(false);
  const [tickets, setTickets] = useState([
    { tipo: "", preco: "", quantidade: "" },
  ]);

  const addTicketForm = () => {
    setTickets([...tickets, { tipo: "", preco: "", quantidade: "" }]);
  };
  const deleteTicketForm = (index: number) => {
    const updated = [...tickets];
    updated.splice(index, 1);
    setTickets(updated);
  };

  const updateTicket = (
    index: number,
    field: keyof (typeof tickets)[0],
    value: string
  ) => {
    const updated = [...tickets];
    updated[index][field] = value;
    setTickets(updated);
  };

  return (
    <View className="  h-3/4 px-5 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1   ">
        <View>
          <Text className="text-gray-600 text-lg font-semibold">Ingressos</Text>
        </View>
        <View>
          {tickets.map((ticket, index) => (
            <View
              key={index}
              className="mt-5 border relative border-gray-200 rounded-lg p-3 bg-white"
            >
              <TouchableOpacity
                onPress={() => deleteTicketForm(index)}
                className="absolute top-2 right-2 z-10  w-6 h-6 items-center justify-center"
              >
                <Text className="text-gray-600 font-bold">
                  <X color={"black"} />
                </Text>
              </TouchableOpacity>
              <View className="mb-3 mt-2">
                <Text className="text-gray-500 font-semibold mb-1">
                  Tipo de Ingresso
                </Text>
                <Input
                  className="  border border-gray-200 bg-white/50"
                  variant="outline"
                  size="md"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                >
                  <InputField
                    placeholder="Ex: Pista, Camarote, VIP"
                    value={ticket.tipo}
                    onChangeText={(text) => updateTicket(index, "tipo", text)}
                  />
                </Input>
              </View>
              <View className="flex-row gap-10">
                <View className="mb-3 flex-1">
                  <Text className="text-gray-500 font-semibold mb-1">
                    Preço
                  </Text>
                  <Input
                    className="  border border-gray-200 bg-white/50"
                    variant="outline"
                    size="md"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                  >
                    <InputField
                      placeholder="R$ 0,00"
                      keyboardType="decimal-pad"
                      value={ticket.preco}
                      onChangeText={(text) =>
                        updateTicket(index, "preco", text.replace(/[^0-9.,]/g, ""))
                      }
                    />
                  </Input>
                </View>
                <View className="mb-3 flex-1 ">
                  <Text className="text-gray-500 font-semibold mb-1">
                    Quantidade
                  </Text>
                  <Input
                    className="  border border-gray-200 bg-white/50"
                    variant="outline"
                    size="md"
                    
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                  >
                    <InputField
                    keyboardType="numeric"
                    
                      placeholder="0"
                      value={ticket.quantidade}
                      onChangeText={(text) =>
                        updateTicket(index, "quantidade", text.replace(/[^0-9]/g , ""))
                      }
                    />
                  </Input>
                </View>
              </View>
              <View>
                <View className="flex-row gap-10">
                  <View className="flex-1">
                    <Text className="text-gray-500 font-semibold mb-1">
                      Data inicio
                    </Text>
                    <TouchableOpacity
                      onPress={() => setDatePickerVisibleStart(true)}
                      className="border border-background-100 flex-row justify-between bg-white/50 rounded-lg h-12 items-center px-3"
                    >
                      <Calendar size={17} color={"#6b7280"} />
                      <View className="flex-1 items-center justify-center">
                        <Text className="text-base text-gray-500">
                          {selectedDateStart
                            ? dayjs(selectedDateStart).format("DD/MM/YYYY")
                            : "Add uma data"}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-500 font-semibold mb-1">
                      Data termino
                    </Text>
                    <TouchableOpacity
                      onPress={() => setDatePickerVisibleEnd(true)}
                      className="border border-background-100 flex-row justify-between bg-white/50 rounded-lg h-12 items-center px-3"
                    >
                      <Calendar size={17} color={"#6b7280"} />
                      <View className="flex-1 items-center justify-center">
                        <Text className="text-base text-gray-500">
                          {selectedDateEnd
                            ? dayjs(selectedDateEnd).format("DD/MM/YYYY")
                            : "Add uma data"}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity
          onPress={addTicketForm}
          className="w-full mb-3 border-dashed border border-indigo-500  rounded-lg flex-row gap-1 bg-white h-14 justify-center items-center mt-5"
        >
          <Plus size={20} color={"#4F46E5"} />
          <Text className="text-indigo-600  text-base">
            Adicionar novo tipo de ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>
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
    </View>
  );
};
