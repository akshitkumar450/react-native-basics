import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./Header";
import Start from "./Start";

const Guess = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}>
      <View style={styles.container}>
        <Header title="Guess the Number" />
        <Start />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Guess;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: "white",
  },
});
