import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import className from "twrnc";
import chatItems from "@/data/chatItems.json";
import { formatTimeTo12Hour } from "@/utils/formatTime";
import PressableEllipsis from "./PressableEllipsis";
import { useRouter } from "expo-router";

interface UserHeaderProps {
  menuItems: {
    label: string;
    onPress: () => void;
  }[];

  user:
    | {
        id?: number;
        name: string;
        type?: string;
        duration: string;
        date: string;
        time: string;
        image: string;
      }
    | undefined;
}

const UserHeader = ({ menuItems, user }: UserHeaderProps) => {
  const router = useRouter(); // Declara el hook de router

  return (
    <View
      style={className`flex-row justify-between items-center p-3 bg-gray-800 py-4 gap-3`}
    >
      <Pressable onPress={() => router.replace("/(tabs)/chats")}>
        <Ionicons name="arrow-back-outline" size={24} color="white" />
      </Pressable>
      <Image
        style={className`h-10 w-10 rounded-full bg-gray-900`}
        source={{
          uri: user?.image,
        }}
      />
      <View style={className`flex-1`}>
        <Text style={className`text-white text-sm font-semibold`}>
          {user?.name}
        </Text>
        <Text style={className`text-gray-400 text-xs`}>
          ult. vez hoy a las {formatTimeTo12Hour(user?.time!)}
        </Text>
      </View>
      <View style={className`flex-row gap-3 items-center`}>
        <Pressable onPress={() => console.log("")}>
          <Feather name="video" size={20} color="white" />
        </Pressable>
        <Pressable onPress={() => console.log("")}>
          <Feather name="phone" size={20} color="white" />
        </Pressable>
        <PressableEllipsis menuItems={menuItems} />
      </View>
    </View>
  );
};

export default UserHeader;
