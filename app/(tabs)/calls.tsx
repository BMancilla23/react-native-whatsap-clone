import { View, Text } from "react-native";
import React from "react";
import Header from "@/components/Header";
import className from "twrnc";

export default function calls() {
  return (
    <View style={className`p-4`}>
      <Header title="Llamadas" showSearchIcon={true} />
    </View>
  );
}
