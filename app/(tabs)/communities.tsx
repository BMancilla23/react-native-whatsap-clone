import { View, Text } from "react-native";
import React from "react";
import Header from "@/components/Header";
import className from "twrnc";

export default function communities() {
  return (
    <View style={className`p-4`}>
      <Header title="Comunidades" showSearchIcon={false} />
    </View>
  );
}
