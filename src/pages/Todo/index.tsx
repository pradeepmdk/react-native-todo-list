import React from 'react';
import {StyleSheet, View} from 'react-native';
import useTodo from './useTodo';
import {ActivityIndicator, Text} from 'react-native-paper';
import {FlatList} from 'react-native-gesture-handler';
import {ITodoResponse} from '../../types/todo.service';

export default function Todo() {
  const todo = useTodo();
  const Item = ({title}: any) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <View style={styles.root}>
      {todo.loading && <ActivityIndicator />}
      <FlatList
        data={todo.data}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
