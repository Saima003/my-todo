import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ToastAndroid } from 'react-native';
import { React, useState } from 'react';
import RenderTodos from './RenderTodos';

const TodoScreen = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Track editing state
  const [currentTodo, setCurrentTodo] = useState(null); // Track the todo being edited

  const addHandler = () => {
    if (todo === "") {
      ToastAndroid.showWithGravity(
        'Please Enter a Task',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      return;
    }

    // Check if it's editing mode
    if (isEditing && currentTodo) {
      const updatedTodoList = todoList.map((t) =>
        t.id === currentTodo.id ? { ...t, item: todo } : t
      );
      setTodoList(updatedTodoList);
      setIsEditing(false); // Turn off editing mode after saving
      setCurrentTodo(null); // Reset the currentTodo
    } else {
      // Add new todo
      let newTodo = { id: Date.now().toString(), item: todo };
      setTodoList([...todoList, newTodo]);
    }

    setTodo(""); // Clear the input field
  };

  return (
    <View style={{ marginTop: 20, marginHorizontal: 10 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 6,
          paddingVertical: 6,
          paddingHorizontal: 16,
        }}
        placeholder="Add a Task"
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          borderRadius: 6,
          marginVertical: 16,
          paddingVertical: 12,
          justifyContent: "center",
        }}
        onPress={addHandler}
      >
        <Text style={{ color: "white", fontSize: 16, textAlign: 'center' }}>
          {isEditing ? "Edit Task" : "Add Task"}
        </Text>
      </TouchableOpacity>
      <RenderTodos
        todoList={todoList}
        setTodoList={setTodoList}
        setTodo={setTodo}
        setIsEditing={setIsEditing}
        setCurrentTodo={setCurrentTodo}
      />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
