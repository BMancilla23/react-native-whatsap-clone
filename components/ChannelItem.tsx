import { View, Text, Image, Button, Pressable } from "react-native";
import React from "react";
import className from "twrnc";
import { formatMembersCount } from "@/utils/formatMembersCount";

interface ChannelItemProps {
  id?: number;
  name: string;
  description?: string;
  category?: string;
  members: number;
  image: string;
  link?: string;
}

const ChannelItem = ({
  id,
  name,
  description,
  category,
  members,
  image,
  link,
}: ChannelItemProps) => {
  return (
    <View style={className`flex-row justify-between items-center gap-3`}>
      {image ? (
        <Image
          source={{ uri: image }}
          style={className`h-14 w-14 rounded-full bg-gray-800`}
        />
      ) : (
        <Image source={{ uri: "./assets/images/default-image.png" }} />
      )}
      <View style={className`flex-1`}>
        <Text style={className`text-white text-lg font-semibold`}>{name}</Text>
        <Text style={className`text-gray-400 text-sm`}>
          {formatMembersCount(members)} seguidores
        </Text>
      </View>
      <Pressable
        style={className`bg-teal-900 text-white rounded-full py-2 px-4`}
      >
        Seguir
      </Pressable>
    </View>
  );
};

export default ChannelItem;
