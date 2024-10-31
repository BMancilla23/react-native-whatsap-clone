import { View, Text, Pressable, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import className from "twrnc";
import EllipsisIcon from "@/assets/icons/EllipsisIcon";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface MenuItem {
  label: string;
  onPress: () => void;
}

const PressableEllipsis = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const [vissible, setVissible] = useState(false);
  const handlePress = () => {
    setVissible(!vissible);
  };

  // Cierra el dropdown si está visible
  const handleOutsidePress = () => {
    if (vissible) {
      setVissible(false);
    }
  };

  return (
    <View style={className`relative`}>
      <Pressable onPress={handlePress}>
        <EllipsisIcon />
      </Pressable>

      <Modal
        transparent
        visible={vissible}
        animationType="fade"
        onRequestClose={handleOutsidePress}
      >
        <Pressable style={className`flex-1`} onPress={handleOutsidePress}>
          <View
            style={[
              className`min-w-48 gap-3 right-4 z-50 top-17 absolute bg-gray-900 p-3 rounded-md`,
              {
                opacity: vissible ? 1 : 0,
                transform: [{ translateY: vissible ? 0 : -10 }],
              },
            ]}
          >
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  item.onPress();
                  setVissible(false); // Cerrar el menú tras seleccionar una opción
                }}
              >
                <Text style={className`text-base text-white`}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default PressableEllipsis;
