import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar";
import { Input, InputField } from "@/components/ui/input";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SearchIcon } from "lucide-react-native";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const mockChats = [
  { id: "1", name: "Alice Souza", profileImg: "", lastMessage: "Hey, how are you?" },
  {
    id: "2",
    name: "Bob Matos",
    profileImg: "",
    lastMessage: "Are we still on for tomorrow?",
  },
  {
    id: "3",
    name: "Charlie Oliveira",
    profileImg: "",
    lastMessage: "Check out this cool link!",
  },
];
interface Chat {
  id: string;
  name: string;
  lastMessage: string;
    profileImg: string;
}

export default function PageChat() {
  const [data, setData] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const renderChatItem = ({ item }: { item: Chat }) => (
    <View className="p-2">
      <TouchableOpacity className="w-full items-center flex-row">
        <View className="" >
                <Avatar size="lg">
                  <AvatarFallbackText>{item.name}</AvatarFallbackText>
                  <AvatarImage
                    source={{
                      uri: item.profileImg,
                    }}
                  />
                  <AvatarBadge />
                </Avatar>
              </View>
              <View className="flex-1 pl-3 ">
                <Text className="text-gray-800 font-bold text-xl ">
                    {item.name}
                </Text>
                <Text className="text-gray-400 text-base">{item.lastMessage}</Text>
              </View>
      </TouchableOpacity>
    </View>
  );

  return (
 
     
      <View className="flex-1 bg-gray-50"> 
        <StatusBar style="light" backgroundColor="#6366F1" translucent={false} />
        <View className="w-full ">
          <View className=" flex-row bg-transparent rounded-b-[3rem] overflow-hidden">
            <LinearGradient
              colors={["#6366F1", "#8B5CF6"]}
              className=" p-5 flex-row items-center rounded-b-[3rem] "
              style={{ flex: 1 }}
            >
              <View className="items-center justify-center h-20 flex-1">
                <View className="pb-4">
                  <Text className="text-white font-bold text-xl">
                    Bate-Papo
                  </Text>
                </View>
                <View className=" w-full  items-center ">
                  <Text className="text-gray-200 font-center font-bold text-sm">
                    Coneverse com pessoas que voce encotrou no explorar
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
       <View className="w-full  mt-4  justify-center items-center">
         <View className="w-10/12  ">
                  <Input
                    className="border border-gray-300  bg-white/50"
                    variant="rounded"
                    size="xl"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                  >
                    <View className="pl-2">
                      <SearchIcon
                        size={20}
                        className="text-gray-400"
                        color={"#9ca3af"}
                      />
                    </View>
                    <InputField placeholder="Pesquisar pessoas..." />
                  </Input>
                </View>
       </View>
        <View>
          <FlatList data={mockChats} renderItem={renderChatItem} />
        </View>
      </View>
    
  );
}
