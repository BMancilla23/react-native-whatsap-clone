import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function ChatsLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Chats",
        headerShown: false,
        navigationBarHidden: true,
        contentStyle: {
          backgroundColor: "#000",
        },
      }}
    />
  );
}
