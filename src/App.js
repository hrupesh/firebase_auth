import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor="#000D" />
      <Text style={{ color: "#fff" }}>Welcome Again!</Text>
      <Text
        style={{
          color: "blue",
          textDecorationStyle: "solid",
          textDecorationLine: "underline",
        }}
      >
        Profile
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
    backgroundColor: "#000D",
    height: "100%",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
