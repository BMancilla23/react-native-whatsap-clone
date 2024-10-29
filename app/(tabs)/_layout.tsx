import { View, Text } from "react-native";
import React, { ComponentType } from "react";
import { Tabs } from "expo-router";
import ChatIcon from "@/assets/icons/ChatIcon";
import StatusIcon from "@/assets/icons/StatusIcon";

import CallIcon from "@/assets/icons/CallIcon";
import CommunittiesIcon from "@/assets/icons/CommunittiesIcon";
import className from "twrnc";

interface TabIconProps {
  IconComponent: ComponentType<{ color: string }>; // El componente de ícono espera una prop "color"
  focused: boolean; // Indica si el tab está seleccionado
}

const TabIcon = ({ IconComponent, focused }: TabIconProps) => (
  <View
    style={{
      borderBottomWidth: focused ? 2 : 0, // Línea indicadora
      borderBottomColor: focused ? "#25D366" : "transparent",
      paddingBottom: 8,
    }}
  >
    <IconComponent color={focused ? "#25D366" : "gray"} />
  </View>
);

export default function TabLayout() {
  return (
    <Tabs
      sceneContainerStyle={className`bg-black`}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 80,
          paddingVertical: 10,
          backgroundColor: "#111",
          borderTopColor: "#333",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "500",
          color: "gray",
        },
        headerShown: false,
        tabBarActiveTintColor: "#25D366", // Verde típico de WhatsApp
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused }) => {
          // Iconos personalizados por pantalla
          let IconComponent: ComponentType<{ color: string }> = ChatIcon;
          if (route.name === "index") IconComponent = ChatIcon;
          else if (route.name === "updates") IconComponent = StatusIcon;
          else if (route.name === "communities")
            IconComponent = CommunittiesIcon;
          else if (route.name === "calls") IconComponent = CallIcon;

          return <TabIcon IconComponent={IconComponent} focused={focused} />;
        },
      })}
    >
      <Tabs.Screen name="chats" options={{ title: "Chats" }} />
      <Tabs.Screen name="updates" options={{ title: "Novedades" }} />
      <Tabs.Screen name="communities" options={{ title: "Comunidades" }} />
      <Tabs.Screen name="calls" options={{ title: "Llamadas" }} />
    </Tabs>
  );
}
