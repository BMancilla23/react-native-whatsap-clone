import { View, Text } from "react-native";
import React from "react";
import className from "twrnc";
import { Tabs } from "expo-router";
import ChatIcon from "@/assets/icons/ChatIcon";
import StatusIcon from "@/assets/icons/StatusIcon";
import CommunittiesIcon from "@/assets/icons/CommunittiesIcon";
import CallIcon from "@/assets/icons/CallIcon";

const ChatIconFun = () => {
  return (
    <View>
      <ChatIcon />
    </View>
  );
};

const UpdateIconFun = () => {
  return (
    <View>
      <StatusIcon />
    </View>
  );
};

const CommunityIconFun = () => {
  return (
    <View>
      <CommunittiesIcon />
    </View>
  );
};

const CallIconFunc = () => {
  return (
    <View>
      <CallIcon />
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      sceneContainerStyle={className`bg-black`}
      screenOptions={{
        tabBarStyle: {
          height: 90,
          padding: 20,
          backgroundColor: "black",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 500,
          color: "white",
        },
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          /* tabBarLabel: "Chats",
          headerTitle: "chats", */
          title: "Chats",
          tabBarIcon: ChatIconFun,
        }}
      />
      <Tabs.Screen
        name="updates"
        options={{
          /* tabBarLabel: "Novedades",
          headerTitle: "novedades", */
          title: "Novedades",
          tabBarIcon: UpdateIconFun,
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          /* tabBarLabel: "Communidades",
          headerTitle: "comunidades", */
          title: "Comunidades",

          tabBarIcon: CommunityIconFun,
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          /*  tabBarLabel: "Llamadas",
          headerTitle: "llamadas", */
          title: "Llamadas",

          tabBarIcon: CallIconFunc,
        }}
      />
    </Tabs>
  );
}
