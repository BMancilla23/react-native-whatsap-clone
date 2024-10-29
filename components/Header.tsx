import CameraIcon from "@/assets/icons/CameraIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import { useHeader } from "@/context/HeaderContext";
import React from "react";
import { Pressable, Text, View } from "react-native";
import className from "twrnc";
import PressableEllipsis from "./PressableEllipsis";

interface HeaderProps {
  title: string;
  showSearchIcon: boolean;
  menuItems: {
    label: string;
    onPress: () => void;
  }[];
  /*  onSearchPress: () => void; */
}

const Header = ({
  title,
  showSearchIcon,
  menuItems,
}: /*  onSearchPress, */
HeaderProps) => {
  const { setIsSearchActive } = useHeader();
  return (
    <View
      style={className`flex-row justify-between items-center mb-4 sticky top-0 z-20`}
    >
      <Text style={className`text-2xl font-semibold text-white`}>{title}</Text>
      <View style={className`flex-row items-center gap-1`}>
        <CameraIcon />
        {showSearchIcon && (
          <Pressable
            /* onPress={onSearchPress} */ onPress={() =>
              setIsSearchActive(true)
            }
          >
            <SearchIcon />
          </Pressable>
        )}
        {/* <EllipsisIcon /> */}
        <PressableEllipsis menuItems={menuItems} />
      </View>
    </View>
  );
};

export default Header;
