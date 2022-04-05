import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const NewNoteButton = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("AddNote");
  };
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <AntDesign name="pluscircleo" color="#861CFD" size={40} />
    </TouchableOpacity>
  );
};

export default NewNoteButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 10,
    right: 15,
    borderRadius: 50,
    width: 50,
    height: 50,
  },
});
