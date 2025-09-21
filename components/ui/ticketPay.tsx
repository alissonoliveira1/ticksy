import { Check } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface TicketType {
  id: string;
  name: string;
  currency: string;
  price: number;
  description: string;
  benefits: string[];
  available: number;
  total: number;
  color: string[];
}
export const TicketPay = ({handleTotal}: { handleTotal: (ticket:string) => void }) => {
  const [selectedTicket, setSelectedTicket] = React.useState("");
  const mockTicketTypes: TicketType[] = [
    {
      id: "1",
      name: "Standard",
      currency: "R$",
      price: 45,
      description: "Entrada geral com acesso completo ao evento",
      benefits: ["Acesso ao evento", "Área geral", "Banheiros"],
      available: 150,
      total: 200,
      color: ["#10B981", "#34D399"],
    },
    {
      id: "2",
      name: "VIP",
      currency: "R$",
      price: 85,
      description: "Experiência premium com benefícios exclusivos",
      benefits: [
        "Acesso ao evento",
        "Área VIP",
        "Bar exclusivo",
        "Estacionamento grátis",
      ],
      available: 25,
      total: 50,
      color: ["#F59E0B", "#FBBF24"],
    },
    {
      id: "3",
      name: "Premium",
      currency: "R$",
      price: 120,
      description: "Experiência completa com todos os benefícios",
      benefits: [
        "Acesso ao evento",
        "Área Premium",
        "Meet & Greet",
        "Catering incluso",
        "Lembrança exclusiva",
      ],
      available: 8,
      total: 20,
      color: ["#8B5CF6", "#A78BFA"],
    },
  ];
  const select = (event: string) => {
    setSelectedTicket(event);
    handleTotal(event);
    console.log("clicou")

  };

 
    return (
      <View>
       {mockTicketTypes.map((event) => (
         <TouchableOpacity
          key={event.id}
        activeOpacity={0.9}
          onPress={() => select(event.id)}
          style={[
            selectedTicket === event.id
              ? {
                  backgroundColor: event.color[0],
                  elevation: 3,
                  shadowColor: "#6366F1",
                  borderColor: "#6366F1",
                  borderWidth: 1,
                }
              : { backgroundColor: "#fff" },
          ]}
          className="bg-gray-50 rounded-2xl p-4 mt-2 "
        >
          <View>
            <Text
              style={[
                selectedTicket === event.id
                  ? { color: "#f9fafb" }
                  : { color: "#374151" },
              ]}
              className="text-gray-700 font-semibold text-xl"
            >
              {event?.name}
            </Text>
          </View>
          <View>
            <Text
              style={[
                selectedTicket === event.id
                  ? { color: "#f9fafb" }
                  : { color: "#6366f1" },
              ]}
              className="text-indigo-500 font-extrabold text-2xl"
            >
              {event?.currency} {event?.price},00
            </Text>
          </View>
          <View>
            <View>
              <Text
                style={[
                  selectedTicket === event.id
                    ? { color: "#f9fafb" }
                    : { color: "#6b7280" },
                ]}
                className="text-gray-500"
              >
                Experiencia vip com beneficios exclusivo
              </Text>
            </View>
            <View className="py-2 gap-1">
              {event?.benefits.map((benefit, index) => (
                <View key={index} className="flex-row gap-2 items-center">
                  <Check
                    color={selectedTicket === event.id ? "#f9fafb" : "#16a34a"}
                    size={16}
                  />
                  <Text
                    style={[
                      selectedTicket === event.id
                        ? { color: "#f9fafb" }
                        : { color: "#4b5563" },
                    ]}
                    className="font-semibold text-gray-600"
                  >
                    {benefit}
                  </Text>
                </View>
              ))}
            </View>
            <View className="mt-6">
              <View
                style={{
                  height: 4,
                  backgroundColor: "rgba(0,0,0,0.1)",
                  borderRadius: 2,
                  marginBottom: 6,
                }}
              >
                <View
                  style={[
                    { height: "100%", borderRadius: 2 },
                    {
                      width: `${event?.available / event?.total * 100}%`,
                    },
                    selectedTicket === event.id
                      ? { backgroundColor: "#f9fafb" }
                      : { backgroundColor: event.color[1] },
                  ]}
                />
              </View>
              <Text
                style={
                  selectedTicket === event.id
                    ? { color: "#f9fafb" }
                    : { color: "#4b5563" }
                }
                className="text-gray-500 text-sm font-semibold text-center"
              >
                {event.available} de {event.total} disponíveis
              </Text>
            </View>
          </View>
        </TouchableOpacity>
       ))}
      </View>
    );
  
  
};
