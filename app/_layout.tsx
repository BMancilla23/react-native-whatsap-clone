import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { HeaderProvider } from "@/context/HeaderContext";

export default function Layout() {
  return (
    <HeaderProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </HeaderProvider>
  );
}
