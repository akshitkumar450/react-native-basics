import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add, decrement, fetchPosts, increment, reset } from "./Redux/actions";

const ReduxCounter = () => {
  const count = useSelector((state) => state.count.count);
  const posts = useSelector((state) => state.count.posts);
  const dispatch = useDispatch();
  //   console.log(posts);
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setData(posts);
  }, [posts]);
  //   console.log(data);
  const handleDelete = (id) => {
    let temp;
    temp = data.filter((item) => item.id !== id);
    setData(temp);
  };

  const addVal = () => {
    dispatch(add(+counter));
    setOpen(false);
    setCounter(0);
  };
  return (
    <ScrollView style={styles.container}>
      <Text>Redux App</Text>
      <Text>count:{count}</Text>
      <View style={styles.btn}>
        <Button title="modal" onPress={() => setOpen(true)} />
      </View>
      <Modal visible={open} animationType="slide">
        <View style={styles.modal}>
          <TextInput
            style={styles.input}
            value={counter}
            placeholder="enter counter value"
            keyboardType="numeric"
            onChangeText={(item) => setCounter(item)}
          />
          <View style={{ flexDirection: "row" }}>
            <View style={styles.btn}>
              <Button title="add" onPress={addVal} />
            </View>
            <View style={styles.btn}>
              <Button
                title="Cancel"
                color="red"
                onPress={() => setOpen(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.btn}>
        <Button title="increment" onPress={() => dispatch(increment())} />
      </View>
      <View style={styles.btn}>
        <Button title="decrement" onPress={() => dispatch(decrement())} />
      </View>

      <View style={styles.btn}>
        <Button title="reset" onPress={() => dispatch(reset())} />
      </View>
      <View style={styles.btn}>
        <Button title="fetchposts" onPress={() => dispatch(fetchPosts())} />
      </View>

      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={(listItem) => {
            return (
              <TouchableHighlight
                underlayColor="red"
                // activeOpacity={0.5}
                onPress={() => handleDelete(listItem.item.id)}>
                <View>
                  <Text style={styles.title}>{listItem.item.title}</Text>
                </View>
              </TouchableHighlight>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ReduxCounter;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
  },
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    backgroundColor: "pink",
    marginVertical: 10,
    padding: 10,
  },
  input: {
    padding: 5,
    marginHorizontal: 10,
    borderColor: "#777",
    borderWidth: 2,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
