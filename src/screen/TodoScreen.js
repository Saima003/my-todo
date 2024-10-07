import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ToastAndroid } from 'react-native'
import { React, useState } from 'react'
const TodoScreen = () => {
  const [todo, setTodo] = useState("");
  const [todoList , setTodoList] = useState([])
  const addHandler =()=>{
    if(todo === ""){
      ToastAndroid.showWithGravity(
        'Please Enter a Task',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  }
  return (
    <View style={{ marginTop: 20, marginHorizontal: 10 }}>
      <TextInput style={{
        borderWidth: 2, borderColor: "#1e90ff", borderRadius: 6, paddingVertical: 6,
        paddingHorizontal: 16,
      }} placeholder="Add a Task" value={todo} onChangeText={text => setTodo(text)} />
      <TouchableOpacity style={{ backgroundColor: "#000", borderRadius: 6, marginVertical: 16, paddingVertical: 12, justifyContent: "center" }} onPress={e => addHandler()}>
        <Text style={{ color: "white", fontSize: 16, textAlign: 'center' }}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({})