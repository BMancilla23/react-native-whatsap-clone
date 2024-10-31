import ChannelItem from "@/components/ChannelItem";
import FloatingButton from "@/components/FloatingButton";
import Header from "@/components/Header";
import MyStatus from "@/components/MyStatus";
import channelData from "@/data/channelItems.json";
import React from "react";
import { FlatList, Text, View } from "react-native";
import className from "twrnc";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import HeaderTemplate from "@/templates/HeaderTemplate";
import { useRouter } from "expo-router";

export default function UpdateScreen() {
  const router = useRouter();
  const menuItems = [
    {
      label: "Privacidad de datos",
      onPress: () => console.log("Privacidad de datos"),
    },
    {
      label: "Crear canal",
      onPress: () => console.log("Crear canal"),
    },
    {
      label: "Ajustes",
      onPress: () => console.log("Ajustes"),
    },
  ];

  {
    /* <View style={className`flex-1 p-4`}>
      <Header title="Novedades" showSearchIcon={true} menuItems={menuItems} /> */
  }
  return (
    <HeaderTemplate
      title={"Novedades"}
      menuItems={menuItems}
      showSearchIcon={true}
    >
      <Text style={className`text-white text-xl p-4`}>Estado</Text>
      <MyStatus />
      <View style={className`flex-row justify-between items-center p-4`}>
        <Text style={className`text-white text-md`}>Canales</Text>
        <Text style={className`text-green-500 text-md`}>Explorar</Text>
      </View>

      <FlatList
        data={channelData}
        contentContainerStyle={className`gap-0`}
        renderItem={({ item }) => <ChannelItem {...item} />}
      />
      <FloatingButton
        icon={<MaterialIcons size={24} name="edit" color="white" />}
        onPress={() => console.log("Chat icon pressed")}
        style={className`absolute bottom-22 right-6 `}
        size={40}
        color="bg-black"
      />

      <FloatingButton
        icon={<AntDesign size={24} name="camera" color="white" />}
        onPress={() => router.push("/camera")}
        style={className`absolute bottom-5 right-5 `}
      />
    </HeaderTemplate>
  );
  /*  </View> */
}
