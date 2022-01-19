import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Card from "./Card";
import Input from "./Input";

const Start = ({ handleNum, userNum }) => {
  const [value, setValue] = useState("");
  // const [number, setNumber] = useState(0);

  const handleChange = (val) => {
    //   only allows number values
    setValue(+val.replace(/[^0-9]/g, "")); //replace non digit with blank
  };

  const handleConfirm = () => {
    if (value === 0) {
      Alert.alert("OOPS", "please entera valid number", [
        {
          text: "ok",
          onPress: () => setValue(""),
          style: "destructive",
        },
      ]);
      return;
    }
    handleNum(parseInt(+value));
    setValue("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
            value={value}
            onChangeText={handleChange}
          />
          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <Button
                title="reset"
                onPress={() => setValue("")}
                color="#c717fc"
              />
            </View>
            <View style={styles.btn}>
              <Button title="confirm" onPress={handleConfirm} color="#f72bfb" />
            </View>
          </View>
        </Card>
        <Card style={styles.numberContainer}>
          <Text>selected number </Text>
          <Text style={styles.number}>{userNum}</Text>
          <View>
            <Button title="START GAME" color="#f72bfb" />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
