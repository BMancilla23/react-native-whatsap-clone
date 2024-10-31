import { View, Text, Image } from "react-native";
import React from "react";
import className from "twrnc";
import data from "@/data/chatItems.json";

const MyStatus = () => {
  return (
    <View style={className`flex-row justify-between items-center gap-3 p-4`}>
      <Image
        source={{ uri: data[5].image }}
        style={className`h-14 w-14 rounded-full bg-gray-800`}
      />
      <View style={className`flex-1`}>
        <Text style={className`text-white text-lg font-semibold`}>
          {data[5].name}
        </Text>
        <Text style={className`text-gray-400 text-sm`}>{data[5].message}</Text>
      </View>
    </View>
  );
};

export default MyStatus;
