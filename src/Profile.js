import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.view}>
      <Text>Welcome!</Text>
      <Text>You are now Logged in</Text>
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
