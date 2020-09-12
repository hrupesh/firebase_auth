import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import App from "./src/App";
import Profile from "./src/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={App} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;

const styles = StyleSheet.create({});
