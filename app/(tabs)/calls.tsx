import { View, Text, FlatList } from "react-native";
import React from "react";
import Header from "@/components/Header";
import className from "twrnc";
import callData from "@/data/callItems.json";
import CallItem from "@/components/CallItem";

export default function calls() {
  return (
    <View style={className`flex-1 p-4`}>
      <Header title="Llamadas" showSearchIcon={true} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={callData}
        renderItem={({ item }) => <CallItem {...item} />}
        contentContainerStyle={className`gap-3`}
      />
    </View>
  );
}
