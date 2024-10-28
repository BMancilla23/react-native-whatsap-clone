import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import className from "twrnc";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import ChatItem from "@/components/ChatItem";
import chatData from "@/data/chatItems.json";
import ChatIcon from "@/assets/icons/ChatIcon";
import FloatingButton from "@/components/FloatingButton";
import { MaterialIcons } from "@expo/vector-icons";

export default function index() {
  return (
    <View style={className`flex-1 p-4 relative`}>
      <Header title="WhatsApp" showSearchIcon={true} />
      <SearchInput />
      <FlatList
        contentContainerStyle={className`gap-3`}
        data={chatData}
        renderItem={({ item }) => <ChatItem {...item} />}
      />

      <FloatingButton
        icon={<MaterialIcons size={24} name="add-comment" color="white" />}
        onPress={() => console.log("Chat icon pressed")}
        style={className`absolute bottom-5 right-5 `}
      />
    </View>
  );
}
