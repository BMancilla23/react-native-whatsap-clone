import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import className from "twrnc";
import { formatMembersCount } from "@/utils/formatMembersCount";
import { truncateText } from "@/utils/truncateText";

interface CommunityItemProps {
  id?: number;
  name: string;
  description: string;
  category?: string;
  members: number;
  image: string;
  link?: string;
}

const CommunityItem = ({
  name,
  description,
  members,
  image,
}: CommunityItemProps) => {
  return (
    <View
      style={className`flex-row items-center py-3 border-b border-gray-700`}
    >
      <Image
        source={{ uri: image }}
        style={className`h-12 w-12 rounded-full bg-gray-800`}
      />
      <View style={className`flex-1 ml-4`}>
        <Text style={className`text-white text-lg font-semibold`}>{name}</Text>
        <Text style={className`text-gray-400 text-sm`}>
          {truncateText(description, 20)}
        </Text>
        <Text style={className`text-gray-500 text-xs`}>
          {formatMembersCount(members)} miembros
        </Text>
      </View>
      <Pressable style={className`bg-teal-900 px-4 py-2 rounded-full`}>
        <Text style={className`text-white text-sm`}>Unirse</Text>
      </Pressable>
    </View>
  );
};

export default CommunityItem;
