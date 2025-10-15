import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Input, InputField } from "@/components/ui/input";
import dayjs from "dayjs";
import { LinearGradient } from "expo-linear-gradient";
import { goBack } from "expo-router/build/global-state/routing";
import { Calendar, Camera, ChevronDown, ChevronLeft } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from "react-native-ui-datepicker";
export default function PersonalInfo() {
  const [isEnabled, setIsEnabled] = useState(false);
  const defaultStyles = useDefaultStyles();
  const [selected, setSelected] = useState<DateType>();
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedGenero, setSelectedGenero] = useState<string | null>("masculino");
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(datePickerVisible);
  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full ">
          <View className=" flex-row bg-transparent rounded-b-[3rem] overflow-hidden">
            <LinearGradient
              colors={["#6366F1", "#8B5CF6"]}
              className=" p-5 flex-row items-center rounded-b-[3rem] "
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
                    Informações Pessoais
                  </Text>
                </View>
                
              </View>
            </LinearGradient>
          </View>
        </View>
        <View>
          <View className=" w-full justify-center items-center mt-6 mb-4">
            <Avatar size="xl">
              <AvatarFallbackText>Jane Doe</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://i.ibb.co/mC3m3gFF/00100s-PORTRAIT-00100-BURST20220226153400411-COVER.jpg",
                }}
              />
              <View className=" bg-indigo-500 p-1 rounded-2xl absolute bottom-0 right-0">
                <Camera size={20} color={"#ffffff"} className=" " />
              </View>
            </Avatar>
            <View>
              <Text
                className="text-gray-500 mt-2"
                style={{ fontSize: 15, fontWeight: "bold" }}
              >
                Editar foto
              </Text>
            </View>
          </View>

          <View className=" w-full h-auto  items-center ">
            <View className=" w-11/12 pb-2 bg-white rounded-2xl   p-1">
            <View className=" w-full pl-1 justify-center items-start my-4">
                <Text className="text-gray-600 text-start font-semibold text-lg">
                  Informações basicas
                </Text>
              </View>
              <View className="w-full flex-row justify-between pb-1">
                <View className=" flex-1 m-1">
                  <View>
                    <Text className="text-gray-500 text-sm font-semibold ml-1 mb-1">
                      Nome
                    </Text>
                  </View>
                  <Input
                    className="  border bg-white/50"
                    variant="outline"
                    size="xl"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                  >
                    <InputField placeholder="Seu nome" />
                  </Input>
                </View>
                <View className="flex-1  m-1">
                  <View>
                    <Text className="text-gray-500 text-sm font-semibold ml-1 mb-1">
                      Sobrenome
                    </Text>
                  </View>
                  <Input
                    className="  border bg-white/50"
                    variant="outline"
                    size="xl"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                  >
                    <InputField placeholder="Seu sobrenome" />
                  </Input>
                </View>
              </View>
              <View className="w-full flex-row justify-between pb-1">
                <View className=" flex-1 m-1">
                  <View>
                    <Text className="text-gray-500 text-sm font-semibold ml-1 mb-1">
                      Email
                    </Text>
                  </View>
                  <Input
                    className="  border bg-white/50"
                    variant="outline"
                    size="xl"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                  >
                    <InputField placeholder="Seu Email" />
                  </Input>
                </View>
              </View>
              <View className="w-full flex-row justify-between pb-1">
                <View className=" flex-1 m-1">
                  <View>
                    <Text className="text-gray-500 text-sm font-semibold ml-1 mb-1">
                      Telefone
                    </Text>
                  </View>
                  <Input
                    className="  border bg-white/50"
                    variant="outline"
                    size="xl"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                  >
                    <InputField placeholder="Seu numero de telefone" />
                  </Input>
                </View>
              </View>
              <View className="w-full flex-row justify-between pb-1">
                <View className=" flex-1 m-1">
                  <View>
                    <Text className="text-gray-500 text-sm font-semibold ml-1 mb-1">
                      Data de nascimento
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => setDatePickerVisible(true)} className=" border border-background-100 flex-row justify-between bg-white/50 rounded-lg h-12 items-center px-3">
                    <Text className="text-lg text-gray-500">
                      {selected ? dayjs(selected).format("DD/MM/YYYY") : "Add uma data"}
                    </Text>
                    <Calendar
                      size={20}
                      color={"#6b7280"}
                      className=" absolute right-3 top-3"
                      
                    />
                  </TouchableOpacity>
                </View>
                <View className="flex-1  m-1">
                  <View>
                    <Text className="text-gray-500 text-sm font-semibold ml-1 mb-1">
                      Genero
                    </Text>
                  </View>
                  <View className="w-full  items-center "> 
                  
                    <View className="relative z-30 w-full">
                       
                      <TouchableOpacity
                        onPress={() => setMenuOpen(true)}
                        className="   rounded-2xl "
                      >
                        <View className=" border border-background-100 flex-row justify-between bg-white/50 rounded-lg h-12 items-center px-3 ">
                         
                          <Text className="text-lg  text-gray-500 ">
                            {selectedGenero}
                          </Text>
                        <ChevronDown className=" absolute right-3 top-3" color={"#6b7280"} size={17} />
                        </View>
                      </TouchableOpacity>
                      {menuOpen && (
                        <View className="w-full absolute h-auto p-1 top-11 z-30 bg-gray-100  elevation-sm rounded-b-lg  justify-center "
                        style={{ zIndex: 999, elevation: 999, position: "absolute" }}
                        >
                          <View className="">
                            <TouchableOpacity
                              onPress={() => {
                                setSelectedGenero("Masculino");
                                setMenuOpen(false);
                              }}
                              className="p-3 border-b border-b-gray-50 "
                            >
                              <Text className="text-gray-500">Masculino</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => {
                                setSelectedGenero("Feminino");
                                setMenuOpen(false);
                              }}
                              className="p-3 border-b border-b-gray-50 text-gray-500"
                            >
                              <Text className="text-gray-500">Feminino</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      )}
                    </View>


                  </View>
                </View>
              </View>
            </View>
            <View className=" w-11/12 relative z-10 mt-10 pb-2 bg-white rounded-2xl   p-1"
              style={{ zIndex: 1, position: "relative" }}
            >
              <View className=" w-full pl-1 justify-center items-start my-4">
                <Text className="text-gray-600 text-start font-semibold text-lg">
                  Configurações de Privacidade
                </Text>
              </View>
              <View className="flex-row justify-between items-center px-1 my-3">
                <View>
                  <Text className="text-gray-500 text-base font-semibold">
                    Perfil Publico
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    Outros Usuarios podem ver seu perfil
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
              <View className="flex-row justify-between items-center px-1 my-3">
                <View>
                  <Text className="text-gray-500 text-base font-semibold">
                    Mostrar idade
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    Exibir sua idade no perfil
                  </Text>
                </View>
                <Switch
                  thumbColor={"#ffffff"}
                  trackColor={{ false: "#d1d5db", true: "#6366f1" }}
                  value={isEnabled}
                  onValueChange={setIsEnabled}
                />
              </View>
              <View className="flex-row justify-between items-center px-1 my-3">
                <View className=" w-9/12">
                  <Text className="text-gray-500 text-base font-semibold">
                    Permitir Mensagens
                  </Text>
                  <Text className="text-gray-400 text-sm">
                    Permitir que outros usuarios me enviem mensagens
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
