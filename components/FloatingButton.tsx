import React, { ReactNode } from "react";
import { Pressable, ViewStyle } from "react-native";
import className from "twrnc";

interface FloatingButtonProps {
  icon: ReactNode;
  onPress: () => void;
  style?: ViewStyle;
  color?: string;
  size?: number;
}

const FloatingButton = ({
  icon,
  onPress,
  style,
  color = "bg-emerald-500",
  size = 50,
}: FloatingButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        className` ${color} p-3 rounded-xl justify-center items-center`,
        {
          width: size,
          height: size,
        },
        style,
      ]}
    >
      {icon}
    </Pressable>
  );
};

export default FloatingButton;
