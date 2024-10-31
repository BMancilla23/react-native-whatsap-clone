import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import className from "twrnc";

interface ChatItemProps {
  id: number;
  name: string;
  message: string;
  date: string;
  image: string;
  onPress: () => void;
}

const ChatItem = ({
  id,
  name,
  message,
  date,
  image,
  onPress,
}: ChatItemProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        className`p-4 rounded-lg`,
        {
          backgroundColor: pressed ? "rgba(255, 255, 255, 0.1)" : "transparent", // Fondo cuando se presiona
          transform: [{ scale: pressed ? 0.98 : 1 }], // Ligera reducción de tamaño en el estado presionado
        },
      ]}
    >
      <View style={className`flex-row justify-between items-center gap-3`}>
        <Image
          source={{ uri: image }}
          style={className`h-14 w-14 rounded-full bg-gray-800`}
        />
        <View style={className`flex-1`}>
          <Text style={className`text-white text-lg font-semibold`}>
            {name}
          </Text>
          <Text style={className`text-gray-400 text-sm`}>{message}</Text>
        </View>
        <Text style={className`text-white text-sm`}>{date}</Text>
      </View>
    </Pressable>
  );
};

export default ChatItem;
