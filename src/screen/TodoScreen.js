import { StyleSheet, Text, View, TextInput, TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
const TodoScreen = () => {
  return (
    <View >
      <TextInput  style={{borderWidth: 2, borderColor : "#1e90ff", borderRadius: 6, paddingVertical : 6,
        paddingHorizontal: 16,
      }} placeholder="Add a Task"/>
    <TouchableOpacity style={{backgroundColor: "#000", borderRadius: 6, paddingVertical:12}}>
        <Text style={{color: "white"}}>Add</Text>
    </TouchableOpacity>
    </View>
  )
}
 
export default TodoScreen

const styles = StyleSheet.create({})