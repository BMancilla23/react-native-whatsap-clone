import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SearchIcon from "@/assets/icons/SearchIcon";
import className from "twrnc";
import CloseCircle from "@/assets/icons/CloseCircle";
import { Ionicons } from "@expo/vector-icons";
import { useHeader } from "@/context/HeaderContext";

/* interface PressableSearchProps {
  onBack: () => void; // Función para volver al paso anterior en la navegación
} */

const PressableSearch = (/* { onBack }: PressableSearchProps */) => {
  const { setIsSearchActive } = useHeader();
  return (
    <View style={className`px-4`}>
      <View
        style={className`flex-row items-center bg-slate-950 rounded-full shadow-lg px-4 h-11`}
      >
        <TouchableOpacity
          /* onPress={onBack} */ onPress={() => setIsSearchActive(false)}
        >
          <Ionicons name="arrow-back-outline" size={20} color="white" />
        </TouchableOpacity>
        <TextInput
          style={[
            className`flex-1 text-white ml-2`,
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
      </View>
    </View>
  );
};

export default PressableSearch;
