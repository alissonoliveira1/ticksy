import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Bell,
  CalendarPlus,
  ChevronRight,
  CircleQuestionMark,
  CreditCard,
  Globe,
  LogOut,
  MapPin,
  MessageSquareWarning,
  Pencil,
  Shield,
  Sparkles,
  User,
} from "lucide-react-native";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onPress: () => void;
  showArrow?: boolean;
}
export default function Index() {
  const handleMenuPress = (item: string) => {
    console.log(`Menu sélectionné: ${item}`);
  };

  function MenuItem({
    icon,
    title,
    subtitle,
    onPress,
    showArrow = true,
  }: MenuItemProps) {
    return (
      <TouchableOpacity onPress={onPress} className="w-full border-gray-100 border flex-row justify-between items-center h-30  rounded-sm mt-2">
        <View className="flex-row items-center justify-center p-3">
          <View className="pr-4 text-indigo-500">{icon}</View>
          <View>
            <Text className="text-gray-500 font-semibold text-base ">
              {title}
            </Text>

            {subtitle && (
              <Text className="text-gray-400 text-xs">{subtitle}</Text>
            )}
          </View>
        </View>
        <View>{showArrow && <ChevronRight size={23} color={"#4B5563"} />}</View>
      </TouchableOpacity>
    );
  }

  return (

     <View className="flex-1 bg-gray-50">
 <StatusBar style="light" backgroundColor="#6366F1" translucent={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 bg-gray-50">
          <View className="relative" style={styles.container}>
          <View className=" w-full h-auto   rounded-b-[3rem] overflow-hidden">
            <LinearGradient
              colors={["#6366F1", "#8B5CF6"]}
              className=" p-5 flex-row items-center rounded-b-[3rem] "
              style={{ flex: 1 }}
            >
              <View style={styles.containerProfile}>
                <Avatar size="md">
                  <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                  <AvatarImage
                    source={{
                      uri: "https://i.ibb.co/mC3m3gFF/00100s-PORTRAIT-00100-BURST20220226153400411-COVER.jpg",
                    }}
                  />
                  <AvatarBadge />
                </Avatar>
                <View style={styles.viewText}>
                  <Text
                    className="text-white"
                    style={{ fontSize: 15, fontWeight: "bold" }}
                  >
                    Alisson de Oliveira
                  </Text>
                  <Text className="text-white text-xs">
                    Alissonoliveria202020@gmail.com
                  </Text>
                </View>
              </View>
              <View>
                <View>
                  <Pencil size={20} color={"white"} />
                </View>
              </View>
            </LinearGradient>
          </View>
          <View className=" rounded-3xl bottom-3 flex-row justify-around relative w-11/12 h-20 bg-white shadow-xl shadow-gray-500">
            <View className="flex-col items-center justify-center">
              <View>
                <Text className="text-indigo-500 font-bold text-xl">12</Text>
              </View>
              <View>
                <Text className="text-gray-500 font-semibold">Ingressos</Text>
              </View>
            </View>
            <View className="flex-col items-center justify-center">
              <View>
                <Text className="text-indigo-500 font-bold text-xl">2</Text>
              </View>
              <View>
                <Text className="text-gray-500 font-semibold">Eventos</Text>
              </View>
            </View>
            <View className="flex-col items-center justify-center">
              <View>
                <Text className="text-indigo-500 font-bold text-xl">8</Text>
              </View>
              <View>
                <Text className="text-gray-500 font-semibold">Favoritos</Text>
              </View>
            </View>
          </View>
 <View className="w-full items-start h-auto p-5 ">
            
            
            <View>
              <Text className="text-gray-500 text-center font-semibold text-xl">
                Organizador
              </Text>
            </View>
            <View className="w-full">
              <MenuItem
                icon={<CalendarPlus size={23} color={"#6366F1"} />}
                title="Criar evento"
                subtitle="crie seu proprio evento"
                onPress={() => router.push('/(tabs)/profile/create-event')}
              />
             
            </View>
          </View>
          <View className="w-full items-start h-auto p-5 ">
           
            <View>
              <Text className="text-gray-500 text-center font-semibold text-xl">
                Minha conta
              </Text>
            </View>
            <View className="w-full">
              <MenuItem
                icon={<User size={23} color={"#6366F1"} />}
                title="Informações pessoais"
                subtitle="nome, email e telefone"
                onPress={() => router.push('/(tabs)/profile/personal-info')}
              />
              <MenuItem
                icon={<CreditCard size={23} color={"#6366F1"} />}
                title="Metodos de pagamento"
                subtitle="Cartão de credito e debito, pix e boleto"
                onPress={() => router.push('/(tabs)/profile/payment-methods')}
              />
              <MenuItem
                icon={<MapPin size={23} color={"#6366F1"} />}
                title="Endereço"
                subtitle="Endereços de cobrança"
                onPress={() => router.push('/(tabs)/profile/address')}
              />
            </View>
          </View>

          <View className="w-full items-start h-auto p-5 ">
            <View>
              <Text className="text-gray-500 text-center font-semibold text-xl">
                Preferencias
              </Text>
            </View>
            <View className="w-full">
              <MenuItem
                icon={<Bell size={23} color={"#6366F1"} />}
                title="Notificação"
                subtitle="Eventos e Lembretes"
                onPress={() => router.push('/(tabs)/profile/notifications')}
              />
              <MenuItem
                icon={<Globe size={23} color={"#6366F1"} />}
                title="Idioma"
                subtitle="Português"
                onPress={() => router.push('/(tabs)/profile/language')}
              />
              <MenuItem
                icon={<Shield size={23} color={"#6366F1"} />}
                title="Politica de privacidade"
                subtitle="Dados e segurança"
                onPress={() => router.push('/(tabs)/profile/privacy-policy')}
              />
            </View>
          </View>

          <View className="w-full items-start h-auto p-5 ">
            <View>
              <Text className="text-gray-500 text-center font-semibold text-xl">
                Suporte
              </Text>
            </View>
            <View className="w-full">
              <MenuItem
                icon={<CircleQuestionMark size={23} color={"#6366F1"} />}
                title="Central de ajuda"
                subtitle="FAQ e guias"
                onPress={() => router.push('/(tabs)/profile/support-center')}
              />
              <MenuItem
                icon={<MessageSquareWarning size={23} color={"#6366F1"} />}
                title="Contate-nos"
                subtitle="Suporte ao cliente"
                onPress={() => router.push('/(tabs)/profile/contact-us')}
              />
              <MenuItem
                icon={<Sparkles size={23} color={"#6366F1"} />}
                title="Avalie o aplicativo"
                onPress={() => router.push('/(tabs)/profile/rate-app')}
              />
            </View>
          </View>
          <View className="w-full items-start h-auto p-5 ">
            <MenuItem
              icon={<LogOut size={23} color={"#6366F1"} />}
              title="Sair da conta"
              onPress={() => handleMenuPress("profile")}
              showArrow={false}
            />
          </View>
        </View>
        </View>
      </ScrollView>
     </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerProfile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  viewText: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    lineHeight: 1.5,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});
