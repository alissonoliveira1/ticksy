import {
  Check,
  ClipboardList,
  Clock,
  Cog,
  DollarSign,
  MapPin,
  Palette,
  Tickets,
} from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";

export const StepIndicator = ({ step, total }: any) => {
  const StepItem = [
    { id: 1, label: " Básicos", icon: ClipboardList },
    { id: 2, label: "Localização", icon: MapPin },
    { id: 3, label: "Data e Hora", icon: Clock },
    { id: 4, label: "Ingressos", icon: Tickets },
    { id: 5, label: "Pagamento", icon: DollarSign },
    { id: 6, label: "Configurações", icon: Cog },
  ];

  return (
    <View>
      <ScrollView horizontal>
        <View className="flex-row items-center gap-3  w-full p-4 ">
          {StepItem.map((item, index) => (
           <View className="flex-row items-center" key={index}>
             <View
              
        
             
             
            >
              <View
                className={`rounded-full p-3  justify-center items-center`}
              >
                {step >= item.id ? (
                  <Check color="#4f46e5" />
                ) : (
                  <item.icon color={step+1 === item.id ? '#4f46e5' : '#9ca3af' } />
                )}
              </View>
              <Text
                className={`text-sm mx-2 ${
                  step + 1 === item.id
                    ? "text-indigo-600 font-bold"
                    : "text-gray-400"
                }`}
              >
                {item.label}
              </Text>
             
            </View>
             {index !== StepItem.length - 1 && (
                <View
                  style={[
                    {height: 2},
                    
                    step + 1 > item.id
                      ? { backgroundColor: "#4f46e5" }
                      : { backgroundColor: "#d1d5db" },
                  ]}
                  className={`w-10  h-1 `}
                ></View>
              )}
           </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
