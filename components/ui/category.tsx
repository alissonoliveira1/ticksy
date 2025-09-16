import React from "react";
import { ScrollView, Text, View } from "react-native";
import { categories } from "../../schemas/EventSchemas";

interface CategoryProps {
  setCategory: (key: string) => void;
}

export const Category: React.FC<CategoryProps> = ({ setCategory }) => {
const [selectedCategory, setSelectedCategory] = React.useState('all');
const clickCategory = (key: any) => {
  setSelectedCategory(key);
  setCategory(key);
}
  return (
    <View className="h-auto gap-4 p-2">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className=" w-full"
      >
        {categories.map((category) => (
          <View
            style={{ padding: 5 }}
            key={category.key}
            onTouchEnd={() => clickCategory(category.key)}
            className={`items-center ml-2 h-auto flex-row justify-center rounded-2xl 
    ${category.key === selectedCategory ? "bg-indigo-500" : "bg-white"}
  `}
          >
            <category.Icon
              size={17}
              color={category.key === selectedCategory ? "#ffffff" : "#4A5565"}
            />
            <Text
              className={`
            text-sm 
            ${category.key === selectedCategory ? "text-white" : "#4A5565"} 
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
