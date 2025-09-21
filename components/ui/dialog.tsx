import { capitaisBrasil } from "@/services/eventServices";
import { LucideCompass, MapPin, SearchIcon, X } from "lucide-react-native";
import React from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Input, InputField } from "./input";
interface DialogProps {
  active: boolean;
  setActive: (active: boolean) => void;
  setSelectedLocation: (location: string) => void;
}
export const ModalLocal = ({ active, setActive,setSelectedLocation }: DialogProps) => {
    const [filter, setFilter] = React.useState("");
    
  const handleActive = () => {
    setActive(!active);
  };
 
const normalizar = (texto: string) =>
  texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const filteredCapitais = capitaisBrasil.filter(
  (item) =>
    filter === "" ||
    normalizar(item.capital).includes(normalizar(filter)) ||
    normalizar(item.sigla).includes(normalizar(filter))
);
  return (
    <Modal
      transparent={true}
      className="flex w-screen relative h-screen "
      animationType="slide"
      visible={active}
    >
      <View className=" w-screen absolute rounded-t-[2rem] border px-2 pt-5 border-gray-100 elevation-sm bottom-0  h-3/5  bg-white items-center">
        <View className=" w-full px-6 flex-row justify-between items-center">
          <View>
            <Text className="text-black text-xl font-semibold">
              Onde voce esta?
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={handleActive} className=" z-0">
              <X color={"gray"} size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-full px-4 mt-4">
          <View className="w-full px-2 mt-4 flex-row  justify-start gap-4 items-center">
            <View>
              <LucideCompass color={"#6366F1"} size={30} />
            </View>
            <View>
              <Text>Usar minha localização atual </Text>
              <Text>Encontre experiencias perto de voce </Text>
            </View>
          </View>
          <View className="w-full ">
            <View className="w-full  mt-4">
              <View className=" w-full">
                <Input
                  className="border  "
                  variant="outline"
                  size="lg"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                
                >
                  <View className="pl-2">
                    <SearchIcon size={20} color={"#99A1AF"} />
                  </View>
                  <InputField value={filter} onChangeText={(e) => setFilter(e)} placeholder="Pesquisar pessoas..." />
                </Input>
              </View>
              <View className="w-full  mt-4 mb-4">
                <View className="w-full  mt-2 mb-2">
                  <Text className="text-black text-start font-semibold text-lg">
                    Locais recentes
                  </Text>
                </View>
                <View className="w-full  ">
                  <ScrollView
                    className="h-72 "
                    showsVerticalScrollIndicator={false}
                  >
                    {filteredCapitais.map((item, index) => (
                      <TouchableOpacity
                        onPress={() => {
                          setSelectedLocation(item.capital);
                          setActive(false);
                        }}
                        key={index}
                        className="w-full py-4  flex-row  border-y border-gray-100 justify-start gap-4 items-center"
                      >
                        <View>
                          <MapPin color={"#6366F1"} size={20} />
                        </View>
                        <View>
                          <Text className="text-gray-500 text-xl font-semibold">
                            {item.capital} - {item.sigla}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
