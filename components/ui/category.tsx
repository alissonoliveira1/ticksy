import { ScrollView, Text, View } from "react-native";
import { categories } from "../../schemas/EventSchemas";

type CategoryItem = {
  key: string;
  label: string;
  Icon: React.ComponentType<{ size: number; color: string }>;
};

export const Category = () => {
  

  return (
    <View className="h-auto gap-2 p-2">
    
       <ScrollView horizontal showsHorizontalScrollIndicator={false}
 className=" w-full"  >
         {categories.map((category) => (
            <View
            style={{ padding:5, gap: 3 }}
       key={category.key}
  className={`items-center h-auto flex-row justify-center rounded-2xl gap-1 
    ${category.key === "all" ? "bg-indigo-500" : "bg-white"}
  `}
      >
        <category.Icon
          size={17}
          color={category.key === "all" ? "#ffffff" : "#000000"}
        />
        <Text
          className={`
            text-sm 
            ${category.key === "all" ? "text-white" : "text-black"} 
            ml-4
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
