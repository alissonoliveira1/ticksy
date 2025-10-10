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

  const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string[] } = {
  music: ["#FF6B6B", "#FF8E53"],       
  sport: ["#4ECDC4", "#44A08D"],      
  theater: ["#A8E6CF", "#7FCDCD"],     
  conference: ["#FFD93D", "#6BCF7F"],  
  festival: ["#FF8A80", "#FF5722"],    
  comedy: ["#CE93D8", "#BA68C8"],     
  art: ["#FFAB91", "#FF8A65"],        
  food: ["#A5D6A7", "#66BB6A"],       

  cinema: ["#5C6BC0", "#3949AB"],      
  party: ["#F50057", "#FF4081"],      
  family: ["#81D4FA", "#29B6F6"],      
  lecture: ["#FFEB3B", "#FFC107"],  
  tech: ["#00C9FF", "#92FE9D"],        
  wellness: ["#81C784", "#388E3C"],    
  charity: ["#FFB74D", "#F57C00"],   
  university: ["#673AB7", "#3F51B5"], 
};
    return colors[category] || ["#B39DDB", "#9575CD"];
  };

  return (
    <View className="h-auto gap-4 pb-6 pt-10 px-2">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className=" w-full"
      >
        {categories.map((category) => (
          <View
            style={{ padding: 7 }}
            key={category.key}
            onTouchEnd={() => clickCategory(category.key)}
            className={`items-center ml-2 h-auto flex-row justify-center rounded-full 
    ${category.key === selectedCategory ? "bg-indigo-500" : "bg-white"}
  `}
          >
            <category.Icon
              size={17}
              color={category.key === selectedCategory ? "#ffffff" : getCategoryColor(category.key)[1]}
            />
            <Text
              className={`
            text-sm
            text-gray-600
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
