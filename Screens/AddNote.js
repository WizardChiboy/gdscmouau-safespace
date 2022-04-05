import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState } from "react";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function save() {
    navigation.navigate("Diary", {
      head: title,
      content: desc,
    });
  }

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <EvilIcons name="close" size={30} color="#861CFD" />
        </TouchableOpacity>
        <Text style={styles.diaryHeading}>Diary</Text>
      </View>

      <View style={styles.mini}>
        <Text style={styles.miniText}>
          What's happening? this is a SafeSpace to journal
        </Text>
      </View>

      <View style={styles.body}>
        <TextInput
          placeholder="Title"
          style={styles.title}
          autoFocus={true}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          placeholder="What's happening..."
          style={styles.diary}
          multiline={true}
          value={desc}
          onChangeText={setDesc}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableOpacity style={styles.btn} onPress={save}>
            <Text style={styles.btnSave}>save</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 30,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    width: "60%",
  },

  diaryHeading: {
    color: "#861CFD",
    fontSize: 25,
    fontWeight: "bold",
  },

  miniText: {
    fontSize: 16,
  },

  diary: {
    height: 400,
    marginTop: 20,
    borderBottomColor: "gray",
    borderWidth: 1,
    textAlignVertical: "top",
    padding: 3,
  },

  title: {
    height: 70,
    maxHeight: 30,
    marginTop: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },

  mini: {
    marginTop: 20,
  },

  body: {
    marginTop: 20,
  },

  btn: {
    backgroundColor: "#861CFD",
    borderRadius: 30,
    marginTop: 20,
  },

  btnSave: {
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
