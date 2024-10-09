import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import nothingfound from "../images/nothing-found.webp"
const RenderTodos = ({ todoList, setTodo, setIsEditing, setCurrentTodo, setTodoList }) => {
  const deleteTodo = (id) => {
    const finalList = todoList.filter((todo) => todo.id.toString() !== id.toString());
    setTodoList(finalList);
  };

  const editTodo = (item) => {
    // Set the task to edit mode
    setTodo(item.item);
    setIsEditing(true);
    setCurrentTodo(item); // Track the current todo being edited
  };

  const Item = ({ todo }) => {
    return (
      <View style={styles.viewItem}>
        <Text style={styles.textItem}>{todo.item}</Text>
        <View style={styles.viewIcons}>
          <TouchableOpacity onPress={() => deleteTodo(todo.id.toString())}>
            <Icon name="trash" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => editTodo(todo)}>
            <Icon name="pencil" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      {
        todoList.length > 0 ?
          <FlatList
            data={todoList}
            renderItem={({ item }) => <Item todo={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
          :
          <View style={styles.imageContainer}>
            <Image source={nothingfound} style={styles.image} />
          </View>
      }
    </View>
  );
};

export default RenderTodos;

const styles = StyleSheet.create({
  viewItem: {
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'space-between', // Space between the items
    alignItems: 'center', // Align items vertically in the center
    borderRadius: 15,
    backgroundColor: "blue",
    marginVertical: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  textItem: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  viewIcons: {
    flexDirection: "row",
    width: 65,
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100, // Adjust the size of the image as needed
    resizeMode: 'contain',
  },
  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85%'
  },
});
