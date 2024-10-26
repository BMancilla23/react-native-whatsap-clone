import { View, Text } from "react-native";
import React from "react";
import Header from "@/components/Header";
import className from "twrnc";

// rnf

export default function updates() {
  return (
    <View style={className`p-4`}>
      <Header title="Novedades" showSearchIcon={true} />
    </View>
  );
}
