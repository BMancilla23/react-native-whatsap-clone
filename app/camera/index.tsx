import { View, Text, Pressable } from "react-native";
import React from "react";
import className from "twrnc";
import { useRouter } from "expo-router";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { CameraView } from "expo-camera";

export default function CameraScreen() {
  const router = useRouter();
  return (
    <CameraView style={className`flex-1 bg-black p-4`}>
      {/* Header */}
      <View style={className`flex-row justify-between items-center`}>
        <Pressable onPress={() => router.back()}>
          <Entypo name="cross" size={24} color="white" />
        </Pressable>

        <Ionicons name="flash-off" size={24} color="white" />
      </View>
      <View style={className`flex-1`}></View>
      {/* BottomAction */}
      <View style={className`w-full gap-6`}>
        <View style={className`flex-row w-full justify-between items-center`}>
          <Feather name="image" size={24} color="white" />
          <Pressable
            style={className`bg-gray-300 border-2 border-white h-14 w-14 rounded-full`}
          ></Pressable>
          <Feather name="refresh-cw" size={24} color="white" />
        </View>
        <View
          style={className`flex-row w-full justify-center gap-3 items-center`}
        >
          <Text style={className`p-2 rounded-xl text-white text-base`}>
            Video
          </Text>

          <Text
            style={className`bg-gray-900 p-2 rounded-xl text-white text-base`}
          >
            Foto
          </Text>
        </View>
      </View>
    </CameraView>
  );
}
