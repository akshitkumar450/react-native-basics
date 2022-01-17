import React from "react";
import { Button, View } from "react-native";

function Btn({ setCount, count }) {
  return (
    <>
      <Button title="increase" onPress={() => setCount(count + 1)} />
      <Button title="reset" onPress={() => setCount(0)} />
      <Button title="decrese" onPress={() => setCount(count - 1)} />
    </>
  );
}

export default Btn;
