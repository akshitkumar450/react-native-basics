import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { TextInput } from "react-native";
import Btn from "./Btn";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
  ]);
  return (
    // <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
    //   {people.map((item) => {
    //     return (
    //       <Text style={styles.list} key={item.id}>
    //         {item.name}
    //       </Text>
    //     );
    //   })}
    // </ScrollView>
    <View style={styles.container}>
      {/**flatlist allows scolling without using scrollView  */}
      <FlatList
        data={people}
        keyExtractor={(item) => item.id} // to use id as key
        renderItem={({ item }) => {
          //we have to destructure item
          return <Text style={styles.text}>{item.name}</Text>;
        }}
      />
    </View>
  );
}

// for styling

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    backgroundColor: "#777",
    paddingTop: 40,
    paddingHorizontal: 20,
    //   alignItems: "center",
    //   justifyContent: "center",
    // padding: "2",
  },
  header: {
    backgroundColor: "red",
    // padding: 20,
    margin: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  btn: {
    display: "flex",
    backgroundColor: "red",
    color: "black",
    marginTop: 20,
  },
  info: {
    backgroundColor: "yellow",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    margin: 5,
    padding: 10,
  },
  list: {
    fontSize: 14,
    textAlign: "center",
    marginVertical: 10,
    backgroundColor: "aqua",
    padding: 10,
  },
  text: {
    color: "white",
  },
});
