import { View, Text, FlatList } from "react-native";
import React from "react";
import className from "twrnc";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import ChatItem from "@/components/ChatItem";
import chatData from "@/data/chatItems.json";

export default function index() {
  return (
    <View style={className`flex-1 p-4`}>
      <Header title="WhatsApp" showSearchIcon={true} />
      <SearchInput />
      <FlatList
        contentContainerStyle={className`gap-3`}
        data={chatData}
        renderItem={({ item }) => <ChatItem {...item} />}
      />
    </View>
  );
}
