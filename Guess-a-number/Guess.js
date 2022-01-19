import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Game from "./Game";
import Header from "./Header";
import Start from "./Start";

const Guess = () => {
  const [userNum, setUserNum] = useState(0);

  const handleNum = (number) => {
    setUserNum(number);
  };
  console.log(userNum);
  return (
    <View style={styles.container}>
      <Header title="Guess the Number" />

      {userNum === 0 ? (
        <Start handleNum={handleNum} userNum={userNum} />
      ) : (
        <Game userNum={userNum} handleNum={handleNum} />
      )}
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
