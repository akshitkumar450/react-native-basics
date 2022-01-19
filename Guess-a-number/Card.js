import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = ({ children, style }) => {
  // spreading the styles
  // to make it reuseable
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
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
  },
});
