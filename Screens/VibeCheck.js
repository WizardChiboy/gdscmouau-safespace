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
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const VibeCheck = () => {
  const emoteWeak = () => {
    navigation.navigate("Profile", {
      data: "weak",
    });
  };

  const emoteGood = () => {
    navigation.navigate("Profile", {
      data: "good",
    });
  };

  const emoteAnxious = () => {
    navigation.navigate("Profile", {
      data: "anxious",
    });
  };

  const emoteBetter = () => {
    navigation.navigate("Profile", {
      data: "better",
    });
  };

  const emoteGuilty = () => {
    navigation.navigate("Profile", {
      data: "guilty",
    });
  };

  const emoteRelieved = () => {
    navigation.navigate("Profile", {
      data: "relieved",
    });
  };

  const emoteHopeful = () => {
    navigation.navigate("Profile", {
      data: "hopeful",
    });
  };

  const emoteHappy = () => {
    navigation.navigate("Profile", {
      data: "happy",
    });
  };

  const emoteLonely = () => {
    navigation.navigate("Profile", {
      data: "lonely",
    });
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={30} color="#861CFD" />
        </TouchableOpacity>
        <Text style={styles.vibeHeading}>Vibe Check</Text>
      </View>

      <View style={styles.mini}>
        <Text style={styles.miniText}>
          What's happening? rate your mood and emotion
        </Text>
      </View>

      <View style={styles.body}>
        <View style={styles.emoteHead}>
          <Text style={styles.emoteGreet}>
            Hello <Text style={{ color: "#861CFD" }}>Stephen</Text>, what
            emotion are you feeling ?
          </Text>
        </View>

        <View style={styles.emotions}>
          <TouchableOpacity onPress={emoteWeak} style={styles.emote}>
            <TextInput
              value={"Weak"}
              editable={false}
              style={styles.textInput}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={emoteGood} style={styles.emote}>
            <TextInput
              value={"Good"}
              editable={false}
              style={styles.textInput}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={emoteAnxious} style={styles.emote}>
            <TextInput
              value={"Anxious"}
              editable={false}
              style={styles.textInput}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={emoteBetter} style={styles.emote}>
            <TextInput
              value={"Better"}
              editable={false}
              style={styles.textInput}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={emoteGuilty} style={styles.emote}>
            <TextInput
              value={"Guilty"}
              editable={false}
              style={styles.textInput}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={emoteRelieved} style={styles.emote}>
            <TextInput
              value={"Relieved"}
              editable={false}
              style={styles.textInput}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={emoteHopeful} style={styles.emote}>
            <TextInput
              value={"Hopeful"}
              editable={false}
              style={styles.textInput}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={emoteHappy} style={styles.emote}>
            <TextInput
              value={"Happy"}
              editable={false}
              style={styles.textInput}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={emoteLonely} style={styles.emote}>
            <TextInput
              value={"Lonely"}
              editable={false}
              style={styles.textInput}
            />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity style={styles.btn} onPress={save}>
          <Text style={styles.btnSave}>submit</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default VibeCheck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    width: "60%",
  },

  textInput: {
    textAlign: "center",
  },

  emotions: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
  },

  emote: {
    borderStyle: "solid",
    borderWidth: 1,
    width: "30%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 30,
  },

  miniText: {
    fontSize: 16,
  },

  title: {
    height: 70,
    maxHeight: 30,
    marginTop: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
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

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    width: "60%",
  },

  vibeHeading: {
    color: "#861CFD",
    fontSize: 25,
    fontWeight: "bold",
  },

  miniText: {
    fontSize: 16,
  },

  mini: {
    marginTop: 20,
  },
});
