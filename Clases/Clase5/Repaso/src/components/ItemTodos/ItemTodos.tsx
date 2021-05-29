import React from 'react';
import {View, Text} from 'react-native';
import ITodo from '../../models/Todo';

interface ItemTodosProps {
  todo: ITodo;
}

const ItemTodos: React.FC<ItemTodosProps> = ({todo}) => {
  return (
    <View>
      <Text>{todo.title}</Text>
    </View>
  );
};

export default ItemTodos;
