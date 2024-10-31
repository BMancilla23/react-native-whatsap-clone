import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import className from "twrnc";
import { Feather, Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import callData from "@/data/callItems.json";
import IconButton from "@/components/IconButton";

export default function CallScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const call = callData.find((item) => item.id === +id);

  const footerButtons = [
    { icon: Ionicons, name: "ellipsis-horizontal", label: "Opciones" },
    { icon: Feather, name: "video", label: "Video Llamada" },
    { icon: AntDesign, name: "sound", label: "Altavoz" },
    { icon: FontAwesome5, name: "microphone", label: "Micrófono" },
    {
      icon: Ionicons,
      name: "call-outline",
      label: "Finalizar llamada",
      bgColor: "bg-rose-900",
    },
  ];

  return (
    <View style={className`flex-1 bg-gray-900 p-3`}>
      {/* Header */}
      <View style={className`flex-row justify-between items-center`}>
        {/* <Pressable
          style={className`bg-gray-800 p-3 rounded-full`}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back-outline" size={20} color="white" />
        </Pressable> */}
        <IconButton
          onPress={() => router.back()}
          icon={Ionicons}
          iconProps={{
            name: "arrow-back-outline",
            size: 20,
            color: "white",
          }}
          bgColor="bg-gray-800"
        />
        <View style={className`flex-1 justify-center items-center`}>
          <Text style={className`text-white text-xl font-semibold`}>
            {call?.name}
          </Text>
          <Text style={className`text-gray-400 text-base`}>Llamando</Text>
        </View>
        {/* <Pressable style={className`bg-gray-800 p-3 rounded-full`}>
          <Feather name="user-plus" size={20} color="white" />
        </Pressable> */}
        <IconButton
          onPress={() => console.log("Añadir a contactos")}
          icon={Feather}
          iconProps={{
            name: "user-plus",
            size: 20,
            color: "white",
          }}
          bgColor="bg-gray-800"
        />
      </View>
      {/* User Image */}
      <View style={className`flex-col flex-1 justify-center items-center`}>
        <Image
          source={{
            uri: call?.image,
          }}
          style={className`h-52 w-52 rounded-full bg-gray-800`}
        />
      </View>

      {/* Footer */}
      <View
        style={className`flex-row justify-between items-center bg-gray-800 p-3 rounded-full`}
      >
        {footerButtons.map((btn, index) => (
          <IconButton
            key={index}
            onPress={() => console.log(btn.label)}
            icon={btn.icon}
            iconProps={{
              name: btn.name,
              size: 20,
              color: "white",
            }}
            bgColor={btn.bgColor || "bg-gray-900"}
          />
        ))}
      </View>
    </View>
  );
}
