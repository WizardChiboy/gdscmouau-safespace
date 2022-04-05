import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Therapist = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Coming Soon</Text>
      </View>
    </SafeAreaView>
  );
};

export default Therapist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
