import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import Card from "./Card";

const randomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndm = Math.floor(Math.random() * (max - min)) + min;
  if (rndm === exclude) {
    return randomNumber(min, max, exclude);
  } else {
    rndm;
  }
};

const Game = ({ userNum, handleNum }) => {
  const [currGuess, setCurrGuess] = useState(randomNumber(1, 100, userNum));

  const handleClose = () => {
    handleNum(0);
  };
  return (
    <View style={styles.container}>
      <Card style={styles.numberContainer}>
        <Text>Guess number </Text>
        <Text style={styles.number}>{userNum}</Text>
      </Card>

      <Card style={styles.inputContainer}>
        <View>
          <Button title="lower" />
        </View>
        <View>
          <Button title="greater" />
        </View>
      </Card>
      <View>
        <Button title="close" onPress={handleClose} />
      </View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    marginVertical: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    maxWidth: "80%",
  },
  numberContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  number: {
    borderColor: "purple",
    borderWidth: 3,
    borderRadius: 10,
    fontSize: 20,
    padding: 15,
    marginVertical: 10,
  },
});
