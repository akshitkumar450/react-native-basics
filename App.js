import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import { Provider } from "react-redux";
import Btn from "./Btn";
import Header from "./Header";
import { store } from "./Redux/store";
import ReduxCounter from "./ReduxCounter";
import Todos from "./Todos";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <Todos />
      </View>

      <ReduxCounter />
    </Provider>
  );
}

// for styling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
  },
});
