import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import App from "./src/App";

export default function Index() {
  return (
    <>
      <App />
      <StatusBar backgroundColor="#000D" />
    </>
  );
}

const styles = StyleSheet.create({});
