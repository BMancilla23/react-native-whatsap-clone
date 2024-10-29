import ChatItem from "@/components/ChatItem";
import FloatingButton from "@/components/FloatingButton";
import chatData from "@/data/chatItems.json";
import HeaderTemplate from "@/templates/HeaderTemplate";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList } from "react-native";
import className from "twrnc";

export default function ChatScreen() {
  /*   const [isSearchActive, setIsSearchActive] = useState(false); */

  const menuItems = [
    {
      label: "Nuevo grupo",
      onPress: () => console.log("Nuevo grupo"),
    },
    {
      label: "Nueva difusión",
      onPress: () => console.log("Nueva difusión"),
    },
    {
      label: "Dispositivos vinculados",
      onPress: () => console.log("Dispositivos vinculados"),
    },
    {
      label: "Mensajes destacados",
      onPress: () => console.log("Mensajes destacados"),
    },
    {
      label: "Ajustes",
      onPress: () => console.log("Ajustes"),
    },
  ];

  // <View style={className`flex-1 p-4 relative`}>
  {
    /* {isSearchActive ? (
        <PressableSearch onBack={() => setIsSearchActive(false)} />
      ) : (
        <Header
          title="WhatsApp"
          showSearchIcon={true}
          menuItems={menuItems}
          onSearchPress={() => setIsSearchActive(true)}
        />
      )} */
  }

  // <SearchInput />
  return (
    <HeaderTemplate
      title="WhatsApp"
      menuItems={menuItems}
      showSearchIcon={true}
    >
      <FlatList
        contentContainerStyle={className`gap-3`}
        data={chatData}
        renderItem={({ item }) => <ChatItem {...item} />}
      />

      <FloatingButton
        icon={
          <MaterialIcons
            size={24}
            name="add-comment"
            color="white"
            style={{ transform: [{ rotate: "180deg" }] }}
          />
        }
        onPress={() => console.log("Chat icon pressed")}
        style={className`absolute bottom-5 right-5 `}
      />
    </HeaderTemplate>
  );
  // </View>
}
