import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.view}>
      <Text style={{ color: "#fff" }}>Welcome Again!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
    backgroundColor: "#000D",
    height: "100%",
    color: "#fff",
  },
});
