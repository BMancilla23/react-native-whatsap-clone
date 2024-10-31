import { View, Text, TextInput, Button, Pressable } from "react-native";
import React from "react";
import className from "twrnc";
import { Entypo, Fontisto, MaterialIcons } from "@expo/vector-icons";

const BottomBar = () => {
  return (
    <View style={className`p-3 flex-row justify-between gap-2 items-center`}>
      <View
        style={className`bg-gray-800 rounded-full p-1 flex-row items-center px-2 gap-2`}
      >
        <Entypo name="emoji-happy" size={24} color="gray" />
        <TextInput
          placeholder="Mensaje"
          style={[
            className`text-md text-gray-300 p-2`,
            {
              outlineStyle: "none",
              outlineWidth: 0,
              borderWidth: 0,
              selectionColor: "transparent",
            },
          ]}
        />
        <Fontisto name="paperclip" size={22} color="gray" />
        <Entypo name="camera" size={22} color="gray" />
      </View>
      <View>
        <Pressable
          style={className`rounded-full h-10 w-10 bg-green-600 items-center justify-center`}
        >
          <MaterialIcons name="keyboard-voice" color="white" size={22} />
        </Pressable>
      </View>
    </View>
  );
};

export default BottomBar;
