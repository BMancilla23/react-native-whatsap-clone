import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { HeaderProvider } from "@/context/HeaderContext";

export default function Layout() {
  return (
    <HeaderProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, statusBarHidden: false }}
        />
        <Stack.Screen name="chats" options={{ headerShown: false }} />
        <Stack.Screen
          name="calls"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="camera"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </HeaderProvider>
  );
}
