import { View, Text, Pressable } from "react-native";
import React, { ElementType, ReactElement } from "react";
import { Icon } from "@expo/vector-icons/build/createIconSet";
import className from "twrnc";

interface IconButtonProps {
  icon: ElementType;
  bgColor: string;
  onPress: () => void;
  iconProps: {
    name: string;
    size: number;
    color: string;
  };
}

const IconButton = ({
  onPress,
  icon: Icon,
  iconProps,
  bgColor = "bg-gray-900",
}: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={className`${bgColor} p-3 rounded-full`}
      accessibilityRole="button"
    >
      <Icon {...iconProps} />
    </Pressable>
  );
};

export default IconButton;
