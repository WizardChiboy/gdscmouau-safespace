import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import db from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { format, render, cancel, register } from "timeago.js";

const NewVent = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const sendDoc = async () => {
    await addDoc(collection(db, "vent"), {
      name: name,
      title: title,
      content: content,
      timeStamp: format(Date.now()),
    }).then(navigation.navigate("Vent"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Vent")}>
              <EvilIcons name="close" color="#861CFD" size={25} />
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <TextInput
              placeholder="vent topic"
              style={styles.ventTopic}
              autoFocus={true}
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              placeholder="your message..."
              style={styles.ventMessage}
              multiline={true}
              value={content}
              onChangeText={setContent}
            />
            <TextInput
              placeholder="write your annonymous name"
              style={styles.ventName}
              value={name}
              onChangeText={setName}
            />

            <TouchableOpacity style={styles.btnAnnonymous} onPress={sendDoc}>
              <Text style={styles.btnAnnonymousText}>share anonymously</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NewVent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 40,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  body: {
    marginTop: 20,
  },

  ventTopic: {
    width: "100%",
    height: 40,
    marginTop: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },

  ventName: {
    width: "100%",
    height: 40,
    marginTop: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },

  ventMessage: {
    height: 500,
    marginTop: 10,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    textAlignVertical: "top",
    padding: 3,
  },

  btnAnnonymous: {
    backgroundColor: "#861CFD",
    borderRadius: 30,
    marginTop: 20,
  },

  btnAnnonymousText: {
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
