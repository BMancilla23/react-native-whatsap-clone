import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import className from "twrnc";
import SearchIcon from "@/assets/icons/SearchIcon";
import CloseCircle from "@/assets/icons/CloseCircle";

const SearchInput = () => {
  return (
    <View
      style={className`flex-row items-center bg-gray-800 rounded-full shadow-lg px-2 mb-4`}
    >
      <SearchIcon />
      <TextInput
        style={[
          className`flex-1 text-white h-10 p-2`,
          {
            outlineStyle: "none",
            outlineWidth: 0,
            borderWidth: 0,
            selectionColor: "transparent",
          },
        ]}
        placeholder="Buscar..."
        placeholderTextColor="#cccccc" // Color claro para contraste
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity>
        <CloseCircle />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
