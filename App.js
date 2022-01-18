import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import Btn from "./Btn";
import Header from "./Header";
import Todos from "./Todos";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Todos />
    </View>
  );
}

// for styling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
