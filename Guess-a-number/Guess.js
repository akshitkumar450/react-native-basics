import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import Start from "./Start";

const Guess = () => {
  return (
    <View style={styles.container}>
      <Header title="Guess the Number" />
      <Start />
    </View>
  );
};

export default Guess;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: "white",
  },
});
