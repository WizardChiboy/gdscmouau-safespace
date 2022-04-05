import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const NewVentButton = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("NewVent");
  };
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <MaterialCommunityIcons
        name="eyedropper-plus"
        color="#861CFD"
        size={30}
      />
    </TouchableOpacity>
  );
};

export default NewVentButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: -10,
    right: 10,
    borderRadius: 50,
    width: 50,
    height: 50,
  },
});
