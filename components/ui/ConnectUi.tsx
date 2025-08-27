import { ScrollView, Text, View } from "react-native";
import { ConnectArrey } from "../../schemas/EventSchemas";


export const ConnectUi = () => {
  

  return (
    <View className="h-auto gap-4 p-2">
    
       <ScrollView horizontal showsHorizontalScrollIndicator={false}
 className=" w-full"  >
         {ConnectArrey.map((category) => (
            <View
            style={{ padding:5, }}
       key={category.key}
  className={`items-center ml-2 h-auto flex-row justify-center rounded-2xl 
    ${category.key === "Sugestões" ? "bg-indigo-500" : "bg-white"}
  `}
      >
        <category.Icon
          size={17}
          color={category.key === "Sugestões" ? "#ffffff" : "#4A5565"}
        />
        <Text
          className={`
            text-sm 
            ${category.key === "Sugestões" ? "text-white" : "#4A5565"} 
            ml-1
          `}
        >
          {category.label}
        </Text>
      </View>
        ))}
       </ScrollView>
 
    </View>
  );
};
