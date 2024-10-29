import { View, Text } from "react-native";
import React from "react";
import className from "twrnc";
import { useHeader } from "@/context/HeaderContext";
import PressableSearch from "@/components/PressableSearch";
import Header from "@/components/Header";

const HeaderTemplate = ({
  title,
  menuItems,
  children,
  showSearchIcon,
}: {
  title: string;
  menuItems: { label: string; onPress: () => void }[];
  showSearchIcon: boolean; // Add this prop if you want to show a search icon in the header.
  children: React.ReactNode;
}) => {
  const { isSearchActive } = useHeader();

  return (
    <View style={className`flex-1 p-4 relative`}>
      {isSearchActive ? (
        <PressableSearch />
      ) : (
        <Header
          title={title}
          menuItems={menuItems}
          showSearchIcon={showSearchIcon}
        />
      )}
      {/* Contenido de la pantalla */}
      {children}
    </View>
  );
};

export default HeaderTemplate;
