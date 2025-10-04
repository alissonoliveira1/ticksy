import { LinearGradient } from "expo-linear-gradient";
import { ChevronRight, CreditCard, Pencil, Plus, Star, Trash2 } from "lucide-react-native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PaymentMethods() {


  const renderCard = () => {
    return (
      <View className="m-4 px-1  ">
        <View className="px-2 py-4 border bg-white border-gray-200 rounded-md ">
       <View className="flex-row items-center">
         <View className="  w-12 h-12 rounded-[20rem] bg-indigo-500 justify-center  items-center">
          <CreditCard color={"#ffffff"} size={20} />
        </View>
        <View className="justify-start pl-3 flex-1">
          <Text className="text-gray-600 font-center font-bold text-lg">
            Visa **** 1234
          </Text>
          <Text className="text-gray-400 font-center  text-sm">
            Expira em 12/24
          </Text>
            <Text className="text-gray-400 font-center  text-sm">
              Usado em 2 dias atras
            </Text>
        </View>
        <View  className="items-start justify-start h-full ">
          <View className="justify-center  w-16 h-7 rounded-2xl py-1 px-2 bg-green-600 items-center">
          <Text className="text-white font-center  text-xs font-semibold">
            Padrão
          </Text>
        </View>
        </View>
       </View>
       <View className="flex-row pt-4 border-t border-gray-200 justify-around mt-4">
        <View className="flex-row gap-1 justify-center flex-1 space-x-2 items-center">
          <Star color={"#6366f1"} fill={"#6366f1"} size={15} />
          <Text className="text-indigo-500 text-sm  font-semibold">
            Padrão
          </Text>
        </View>
        <View className="flex-row gap-1 flex-1 space-x-2 border-l border-r border-l-gray-200 border-r-gray-200
         justify-center items-center">
          <Pencil color={"#6366f1"} size={15} />
          <Text className="text-indigo-500 text-sm font-semibold">
            Editar
          </Text>
        </View>
        <View className="flex-row gap-1 justify-center flex-1 space-x-2 items-center">
          <Trash2 color={"#ef4444"} size={15} />
          <Text className="font-semibold text-sm text-red-500">
            Remover
          </Text>
        </View>
       </View>
      </View>
      </View>
    );
  }
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
       <View className="w-full ">
                <View className=" flex-row bg-transparent rounded-b-[3rem] overflow-hidden">
                  <LinearGradient
                    colors={["#6366F1", "#8B5CF6"]}
                    className=" p-5 flex-row items-center rounded-b-[3rem] "
                    style={{ flex: 1 }}
                  >
                    <View className="items-center justify-center flex-row  flex-1">
                      <View className="pb-1">
                        <Text className="text-white font-bold text-xl">
                          Metodos de pagamento
                        </Text>
                      </View>
                     
                    </View>
                  </LinearGradient>
                </View>
              </View>
              <View className="m-4 p-4 mt-8 bg-white rounded-2xl elevation-sm flex-row justify-between items-center space-x-4">
                <View className="  w-14 h-14 rounded-[20rem] bg-indigo-500/10 justify-center  items-center">
                  <Plus color={"#6366F1"} size={25} />
                </View>
                <View className="justify-start pl-3 flex-1">
                  <Text className="text-gray-600 font-center font-bold text-lg">
                    Adicionar novo Cartão 
                  </Text>
                       <Text className="text-gray-400 font-center  text-sm">
                        Cartão de credito ou débito
                       </Text>
                </View>
                <View>
                  <ChevronRight color={"#4b5563"} size={25} />
                </View>
              </View>
              <View>
                <View>
                  <Text className="text-gray-600 font-center font-bold text-xl mt-5  ml-5">
                    Cartões Salvos
                  </Text>
                </View>
                {renderCard()}
              </View>
    </SafeAreaView>
  );
}