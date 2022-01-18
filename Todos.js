import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Todos() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([{ name: "hello", id: 1 }]);

  const handleChange = (item) => {
    setTodo(item);
  };

  const handleAdd = () => {
    if (todo.length < 3) {
      Alert.alert("OOPS", "please add a valid todo", [
        { text: "ok", onPress: () => console.log("alert closed") },
      ]);
    } else {
      setTodos([{ name: todo, id: Math.random() }, ...todos]);
    }

    setTodo("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="enter todo"
        value={todo}
        onChangeText={(item) => handleChange(item)}
      />
      <View style={styles.btn}>
        <Button onPress={handleAdd} title="Add todo" color="orange" />
      </View>
      <View style={styles.list}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.todo}>
              <Text>{item.name}</Text>
              <MaterialIcons size={18} color="#333" name="delete" />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 5,
    flex: 1,
  },
  input: {
    padding: 5,
    marginHorizontal: 10,
    borderColor: "#777",
    borderWidth: 2,
  },
  btn: {
    padding: 20,
  },
  todo: {
    backgroundColor: "pink",
    marginVertical: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  list: {
    flex: 1,
  },
});
