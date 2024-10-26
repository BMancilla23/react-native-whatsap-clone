import { View, Text } from "react-native";
import React from "react";
import className from "twrnc";
import CameraIcon from "@/assets/icons/CameraIcon";
import EllipsisIcon from "@/assets/icons/EllipsisIcon";
import SearchIcon from "@/assets/icons/SearchIcon";

const Header = ({
  title,
  showSearchIcon,
}: {
  title: string;
  showSearchIcon: boolean;
}) => {
  return (
    <View style={className`flex-row justify-between items-center mb-4`}>
      <Text style={className`text-2xl font-semibold text-white`}>{title}</Text>
      <View style={className`flex-row items-center gap-1`}>
        <CameraIcon />
        {showSearchIcon && <SearchIcon />}
        <EllipsisIcon />
      </View>
    </View>
  );
};

export default Header;
