import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const RenderTodos = ({todoList, setTodoList, setTodo}) => {
  const deleteTodo= (id) =>{
    let finalList = todoList.filter(todo => todo.id.toString() !== id.toString());
    setTodoList(finalList)
  }
  const editTodo = (id) =>{
    let selectedTodo = todoList.filter(todo => todo.id.toString() === id.toString());
    setTodo(selectedTodo.item)
  }
  const Item = ({ todo }) => {
    return (
      <View style={styles.viewItem}>
        <Text style={styles.textItem}>{todo.item}</Text>
        <View style={styles.viewIcons}>
        <TouchableOpacity onPress={() => deleteTodo(todo.id.toString())}>
          <Icon name="trash" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => editTodo(todo.id.toString())}>
          <Icon name="pencil" size={24} color="white" />
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={todoList}
        renderItem={({item}) => <Item todo={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default RenderTodos;

const styles = StyleSheet.create({
  viewItem: {
    flexDirection: 'row',        // Arrange children in a row
    justifyContent: 'space-between', // Space between the items
    alignItems: 'center',        // Align items vertically in the center
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
  viewIcons:{
    flexDirection: "row",
    width: 65,
    justifyContent: "space-between"
  }
});
