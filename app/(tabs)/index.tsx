import { View, Text } from "react-native";
import React from "react";
import className from "twrnc";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";

export default function index() {
  return (
    <View style={className`flex-1 p-4`}>
      <Header title="WhatsApp" showSearchIcon={true} />
      <SearchInput />
    </View>
  );
}
