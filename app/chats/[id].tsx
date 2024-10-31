import { View, Text, Pressable } from "react-native";
import React from "react";
import UserHeader from "@/components/UserHeader";
import className from "twrnc";
import BottomBar from "@/components/BottomBar";
import { useLocalSearchParams } from "expo-router";
import chatData from "@/data/callItems.json";

export default function UserChatScreen() {
  const { id } = useLocalSearchParams(); // Obtiene el id de la url

  const parseId = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10); // Convertir id a número

  const user = chatData.find((item) => item.id === parseId); // Filtra el chat específico

  const messages = [
    { id: 1, text: "Hello Spaqoo", time: "8:21pm", sender: "user" },
    { id: 2, text: "Hi Ali", time: "8:22pm", sender: "self" },
    { id: 3, text: "How are you?", time: "8:23pm", sender: "user" },
    { id: 4, text: "I'm good, thanks!", time: "8:24pm", sender: "self" },
  ];

  const menuItems = [
    {
      label: "Añadir a contactos",
      onPress: () => console.log("Añadir a contactos"),
    },
    {
      label: "Archivos, enlaces y docs",
      onPress: () => console.log("Archivos, enlaces y docs"),
    },
    {
      label: "Buscar",
      onPress: () => console.log("Buscar"),
    },
    {
      label: "Silenciar notificaciones",
      onPress: () => console.log("Silenciar notificaciones"),
    },
    {
      label: "Mensajes temporales",
      onPress: () => console.log("Mensajes temporales"),
    },
    {
      label: "Fondo de pantalla",
      onPress: () => console.log("Fondo de pantalla"),
    },
    {
      label: "Más",
      onPress: () => console.log("Más"),
    },
  ];

  return (
    <View style={className`flex-1 bg-gray-900 justify-between`}>
      <UserHeader menuItems={menuItems} user={user} />
      <View style={className`flex-1 p-3 gap-3`}>
        {messages.map((msg) => (
          <Pressable
            key={msg.id}
            style={({ pressed }) => [
              className`rounded-xl p-2 w-auto mb-2 flex-row gap-3`,
              msg.sender === "self"
                ? className`bg-emerald-700 self-end`
                : className`bg-gray-800 self-start`,
              pressed && className`opacity-75`,
            ]}
          >
            <Text style={className`text-white text-base`}>{msg.text}</Text>
            <Text style={className`text-xs text-gray-400 mt-1`}>
              {msg.time}
            </Text>
          </Pressable>
        ))}
      </View>
      <BottomBar />
    </View>
  );
}
