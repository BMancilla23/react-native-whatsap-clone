import { View, Text, FlatList } from "react-native";
import React from "react";
import Header from "@/components/Header";
import className from "twrnc";
import communityData from "@/data/communityItems.json";
import CommunityItem from "@/components/CommunityItem";
import HeaderTemplate from "@/templates/HeaderTemplate";

export default function CommunityScreen() {
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
        contentContainerStyle={className`gap-3`}
        renderItem={({ item }) => <CommunityItem {...item} />}
      />
    </HeaderTemplate>
  );
  /*   </View> */
}
