import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = (props) => {
  //input styles  and if we want to override the styles then we can pass it from component
  return <TextInput style={{ ...styles.input, ...props.style }} {...props} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    padding: 5,
    width: "100%",
    marginVertical: 15,
  },
});
