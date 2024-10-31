import { View, Text, FlatList } from "react-native";
import React from "react";
import Header from "@/components/Header";
import className from "twrnc";
import communityData from "@/data/communityItems.json";
import CommunityItem from "@/components/CommunityItem";
import HeaderTemplate from "@/templates/HeaderTemplate";
import FloatingButton from "@/components/FloatingButton";
import CameraIcon from "@/assets/icons/CameraIcon";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function CommunityScreen() {
  const router = useRouter();
  const menuItems = [
    {
      label: "Ajustes",
      onPress: () => console.log("Ajustes"),
    },
  ];
  {
    /* <View style={className`flex-1 p-4`}>
      <Header
        title="Comunidades"
        showSearchIcon={false}
        menuItems={menuItems}
      /> */
  }

  return (
    <HeaderTemplate
      title={"Comunidades"}
      menuItems={menuItems}
      showSearchIcon={false}
    >
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={communityData}
        contentContainerStyle={className`gap-0`}
        renderItem={({ item }) => <CommunityItem {...item} />}
      />

      <FloatingButton
        icon={<AntDesign size={24} name="camera" color="white" />}
        onPress={() => router.push("/camera")}
        style={className`absolute bottom-5 right-5 `}
      />
    </HeaderTemplate>
  );
  /*   </View> */
}
