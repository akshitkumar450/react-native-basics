import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const Start = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start a New Game</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.btnContainer}>
          <Button title="reset" />
          <Button title="confirm" />
        </View>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 10,
    // works only  on ios
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    // use this for android with ios settings
    elevation: 8,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
    maxWidth: "80%",
  },
  btnContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
