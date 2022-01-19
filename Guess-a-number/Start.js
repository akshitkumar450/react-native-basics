import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Card from "./Card";

const Start = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start a New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.btnContainer}>
          <Button title="reset" />
          <Button title="confirm" />
        </View>
      </Card>
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
