import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";
import Diary from "./Screens/Diary";
import Vent from "./Screens/Vent";
import Resources from "./Screens/Resources";
import Therapist from "./Screens/Therapist";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from "@react-navigation/stack";
import StackScreen from "./Screens/StackScreen";
import { createRef } from "react";

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export function TabNav() {
  return (
    <Tab.Navigator
      labelled={false}
      barStyle={{ backgroundColor: "white" }}
      activeColor="#861CFD"
    >
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        component={Vent}
        name="Vent"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chemical-weapon"
              color={color}
              size={25}
            />
          ),
        }}
      />

      <Tab.Screen
        component={Diary}
        name="Diary"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open-outline"
              color={color}
              size={25}
            />
          ),

        }}
      />

      <Tab.Screen
        component={Resources}
        name="Resources"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-outline"
              color={color}
              size={25}
            />
          ),
        }}
      />

      <Tab.Screen
        component={Therapist}
        name="Therapist"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="doctor" color={color} size={25} />
          ),
          tabBarBadge: "soon",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer ref={createRef()}>
        <StackScreen />
      </NavigationContainer>
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
