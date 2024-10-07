import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RenderTodos = ({todoList}) => {
  const Item = ({ todo }) => {
    return (
      <View>
        <Text>{todo.item}</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={todoList}
        renderItem={({item}) => <Item todo={item} />}
      />
    </View>
  );
}

export default RenderTodos;

const styles = StyleSheet.create({});
