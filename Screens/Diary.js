import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import NewNoteButton from "./Components/NewNoteButton";

const Diary = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const onPress = () => {
    navigation.navigate("AddNote");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.noteContainer}>
          <Text style={styles.noteHead}>
            {route.params == undefined ? "" : route.params.head}
          </Text>
          <Text style={styles.noteContent}>
            {route.params == undefined
              ? "you do not have any note, add some notes"
              : route.params.content}
          </Text>
        </View>
      </ScrollView>

      <NewNoteButton />
    </SafeAreaView>
  );
};

export default Diary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },

  noteContainer: {
    backgroundColor: "#4747d1",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },

  noteHead: {
    color: "white",
    padding: 10,
    textTransform: "capitalize",
  },

  noteContent: {
    color: "#d9d9d9",
  },
});
