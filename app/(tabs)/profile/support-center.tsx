import { Accordion, AccordionContent, AccordionContentText, AccordionHeader, AccordionIcon, AccordionItem, AccordionTitleText, AccordionTrigger } from "@/components/ui/accordion";
import { Divider } from '@/components/ui/divider';
import { Input, InputField } from "@/components/ui/input";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { ChevronDown, ChevronUp, Mail, MessageSquareMore, Phone, SearchIcon } from "lucide-react-native";
import { Fragment, useState } from "react";
import { Text, View } from "react-native";

export default function SupportCenter() {
  const [openItem, setOpenItem] = useState<string | null>(null);

   const reiItens = [
            {
              value: "a",
              title: "Como posso transferir meu ingresso?",
              content:
                "Para transferir um ingresso, acesse 'Meus Ingressos', selecione o ingresso desejado e toque em 'Transferir'. Digite o email da pessoa que receberá o ingresso.",
            },
            {
              value: "b",
              title: "O que é o Connect Match?",
              content:
                "Connect Match é nosso sistema que conecta pessoas que vão ao mesmo evento. Você pode conhecer pessoas com interesses similares e compartilhar experiências.",
            },
            {
              value: "c",
              title: "Como alterar minha forma de pagamento?",
              content:
                "Vá em Perfil e depois em Métodos de Pagamento. Você pode adicionar novos cartões, definir um padrão ou remover métodos antigos.",
            },
            {
              value: "d",
              title: "Posso cancelar meu ingresso?",
              content:
                "O cancelamento depende da política do evento. Verifique os detalhes do seu ingresso ou entre em contato com o organizador.",
            },
          ]
  const handleToggle = (value: string) => {
    setOpenItem((prev) => (prev === value ? null : value));
  };
  return (
   <View className="flex-1 bg-gray-100">
    <StatusBar style="light" backgroundColor="#6366F1" translucent={false} />
    <View className="w-full ">
            <View className=" flex-row bg-transparent rounded-b-[3rem] overflow-hidden">
              <LinearGradient
                colors={["#6366F1", "#8B5CF6"]}
                className=" p-5 flex-row items-center rounded-b-[3rem] "
                style={{ flex: 1 }}
              >
                <View className="items-center justify-center  flex-1">
                  <View className="pb-1 pt-5">
                    <Text className="text-white font-bold text-xl">
                      Central de Suporte
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>
          <View className="w-full  p-3  justify-center items-center">
               <View className="w-10/12  ">
                  <Input
                    className="  border border-gray-200 bg-white/50"
                    variant="rounded"
                    size="xl"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                  >
                    <View className="pl-2">
                      <SearchIcon
                        size={20}
                        className="text-white"
                        color={"#e5e7eb"}
                      />
                    </View>
                    <InputField placeholder="Como podemos ajudar?" />
                  </Input>
                </View>
                <View className="w-full  gap-2 mt-4 justify-between items-center flex-row">
            <View className=" w-32 h-24 mt-4  bg-white items-center justify-center rounded-xl">
              <View className="bg-indigo-500/10 p-3 mb-2 rounded-[20rem] ">
              <MessageSquareMore size={20} color="#6366F1" /></View>
              <Text className="text-gray-500 text-sm font-semibold text-center">
                Chat ao vivo
                </Text>
                </View>
                <View className=" w-32 h-24  mt-4  bg-white items-center justify-center rounded-xl">
                  <View className="bg-indigo-500/10 p-3 mb-2 rounded-[20rem] ">
                  <Mail size={20} color="#6366F1" /></View>
              <Text className="text-gray-500 text-sm font-semibold text-center">
                Enviar Email
                </Text>
                </View>
                <View className=" w-32 h-24  mt-4  items-center bg-white justify-center  rounded-xl">
                  <View className="bg-indigo-500/10 p-3 mb-2 rounded-[20rem] ">
                  <Phone size={20} color="#6366F1" /></View>
              <Text className="text-gray-500 text-sm font-semibold text-center">
                Telefone
                </Text>
                </View>
                </View>
          </View>
          <View className="w-full px-3  justify-center items-center ">
             <Accordion
      size="md"
      variant="filled"
      type="single"
      isCollapsible={true}
      isDisabled={false}
      className="m-5 w-[100%] border py-2 border-gray-200"
    >
     {reiItens.map((item, i) => (
      <Fragment key={item.value}>
 <AccordionItem value={item.value } key={item.value} >
        <AccordionHeader>
          <AccordionTrigger onPress={() => handleToggle(item.value)}>
          
            
                <>
                  <AccordionTitleText className="text-gray-500">
                    {item.title}
                  </AccordionTitleText>
                  {openItem === item.value ?(
                    <AccordionIcon as={ChevronUp} className="ml-3" />
                  ) : (
                    <AccordionIcon as={ChevronDown} className="ml-3" />
                  )}
                </>
         
           
          </AccordionTrigger>
        </AccordionHeader>
         {openItem === item.value && (
                  <AccordionContent>
                    <AccordionContentText>{item.content}</AccordionContentText>
                  </AccordionContent>
                )}
      </AccordionItem>
      {i < 3 && <Divider />}
     </Fragment>
     ))}
   
      
    </Accordion>
          </View>
          <View>
            <Text className="text-gray-500 font-semibold text-center mb-5">
              Ainda precisa de ajuda?
            </Text>
            <View className=" justify-center items-center m">
              <Text className="text-gray-400 font-bold text-sm">
              Nossa equipe está disponível para ajudar você
            </Text>
            </View>
           <View className="flex-row gap-2 justify-center items-center mt-2">
            <Mail color={"#6366F1"} size={20} />
            <Text className="text-indigo-500 font-semibold">
            Ticksyhelp@gmail.com
           </Text>
           </View>
          </View>
   </View>
  );
}