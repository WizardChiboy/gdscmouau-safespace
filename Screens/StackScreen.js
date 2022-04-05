import { StyleSheet, Text, View } from "react-native";
import Therapist from "./Therapist";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";
import NewVent from "./NewVent";
import Diary from "./Diary";
import Vent from "./Vent";
import VibeCheck from "./VibeCheck";
import Home from "./Home";
import { TabNav } from "../App";
import AddNote from "./AddNote";
import Profile from "./Profile";

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default function StackScreen() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={TabNav}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="AddNote"
          component={AddNote}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="DiaryScreen"
          component={Diary}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="NewVent"
          component={NewVent}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Therapist"
          component={Therapist}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Vent"
          component={Vent}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="VibeCheck"
          component={VibeCheck}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
