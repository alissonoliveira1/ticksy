import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import "../../global.css";
 const TabsUi = ({ state, descriptors, navigation, insets }: BottomTabBarProps) => {
    const { colors } = useTheme();
return(
  <View className=" mr-2 ml-2 absolute bottom-5  flex  overflow-hidden rounded-[3rem]" style={{ elevation:4,flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

               const icons =
          options.tabBarIcon !== undefined
            ? options.tabBarIcon
            : options !== undefined
            

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
          key={route.key}
            className="items-center flex-row flex-1 gap-1 justify-center pl-[0.1rem] pr-[0.1rem] pt-[0.6rem] pb-[0.6rem] "
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={1} 
            style={{ backgroundColor: isFocused ? "#615FFF" : "#fff"}}
            
          >
             <View className="text-sm font-semibold" >
              {typeof icons === "function"
                ? icons({
                    focused: isFocused,
                    color: isFocused ? '#ffffffff' : colors.text,
                    size: 20,
                  })
                : icons}
            </View>
            <Text className="text-sm font-semibold" style={{ color: isFocused ? '#ffffffff' : colors.text }}>
              {typeof label === "function"
                ? label({
                    focused: isFocused,
                    color: isFocused ? colors.primary : colors.text,
                    position: "beside-icon",
                    children: route.name,
                    
                  })
                : label}
              
            </Text>
           
          </TouchableOpacity>
        );
      })}
    </View>
)
}
export default TabsUi