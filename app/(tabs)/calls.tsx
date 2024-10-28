import { View, Text, FlatList } from "react-native";
import React from "react";
import Header from "@/components/Header";
import className from "twrnc";
import callData from "@/data/callItems.json";
import CallItem from "@/components/CallItem";
import FloatingButton from "@/components/FloatingButton";
import { MaterialIcons } from "@expo/vector-icons";

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

      <FloatingButton
        icon={<MaterialIcons size={24} name="add-call" color="white" />}
        onPress={() => console.log("Chat icon pressed")}
        style={className`absolute bottom-5 right-5 `}
      />
    </View>
  );
}
