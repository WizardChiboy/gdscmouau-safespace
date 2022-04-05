import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import pic from "../assets/images/don.jpg";

const Profile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="#861CFD" />
        </TouchableOpacity>

        <View style={styles.picCover}>
          <Image source={pic} style={styles.dp} />
        </View>

        <View style={styles.profileMain}>
          <View style={styles.profileName}>
            <Text style={styles.value}>Stephen Martins</Text>
          </View>

          <View style={styles.profileBody}>
            <Text style={styles.key}>
              Gender : <Text style={styles.value}>male</Text>
            </Text>

            <Text style={styles.key}>
              Occupation : <Text style={styles.value}>student</Text>
            </Text>
          </View>

          <View style={styles.vibeStatus}>
            <Text style={styles.key}>
              Vibe Status :
              <Text style={styles.value}>
                {" "}
                {route.params == undefined ? "" : route.params.data}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
  },

  picCover: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 70,
  },

  profileName: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
  },

  profileMain: {
    backgroundColor: "#861CFD",
    marginTop: 10,
    padding: 20,
    borderRadius: 7,
  },

  nameValue: {
    fontSize: 18,
    color: "#861CFD",
  },

  dp: {
    width: 120,
    height: 140,
    borderRadius: 50,
  },

  profileBody: {
    marginTop: 30,
  },

  key: {
    fontSize: 16,
    marginBottom: 20,
    color: "#fff",
  },

  value: {
    color: "#fff",
  },
});
