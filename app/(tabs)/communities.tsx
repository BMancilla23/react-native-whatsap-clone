import { View, Text, FlatList } from "react-native";
import React from "react";
import Header from "@/components/Header";
import className from "twrnc";
import communityData from "@/data/communityItems.json";
import CommunityItem from "@/components/CommunityItem";

export default function communities() {
  return (
    <View style={className`flex-1 p-4`}>
      <Header title="Comunidades" showSearchIcon={false} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={communityData}
        contentContainerStyle={className`gap-3`}
        renderItem={({ item }) => <CommunityItem {...item} />}
      />
    </View>
  );
}
