import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Card from "./Card";
import Input from "./Input";

const Start = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start a New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          // passing the props to component and there we are spreading all these
          placeholder="enter a number"
          keyboardType="number"
          blurOnSubmit
          autoCapitalize={false}
          autoCorrect={false}
          maxLength={2}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="reset" color="#c717fc" />
          </View>
          <View style={styles.btn}>
            <Button title="confirm" color="#f72bfb" />
          </View>
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
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    padding: 5,
    width: "100%",
    marginVertical: 15,
  },
  btnContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btn: {
    width: 100,
  },
});
