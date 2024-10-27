import ChannelItem from "@/components/ChannelItem";
import Header from "@/components/Header";
import MyStatus from "@/components/MyStatus";
import channelData from "@/data/channelItems.json";
import React from "react";
import { FlatList, Text, View } from "react-native";
import className from "twrnc";

export default function updates() {
  return (
    <View style={className`flex-1 p-4`}>
      <Header title="Novedades" showSearchIcon={true} />
      <Text style={className`text-white text-xl mb-4`}>Estado</Text>
      <MyStatus />
      <View style={className`flex-row justify-between items-center mb-4`}>
        <Text style={className`text-white text-md`}>Canales</Text>
        <Text style={className`text-green-500 text-md`}>Explorar</Text>
      </View>

      <FlatList
        data={channelData}
        contentContainerStyle={className`gap-5`}
        renderItem={({ item }) => <ChannelItem {...item} />}
      />
    </View>
  );
}
