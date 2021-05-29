import React from 'react';
import {View, Text} from 'react-native';
import ITodo from '../../models/Todo';

interface TodoDetalleProps {
  todo: ITodo;
}

const TodoDetalle: React.FC<TodoDetalleProps> = ({todo}) => {
  return (
    <View>
      <Text>Usuario: {todo.userId}</Text>
      <Text>{todo.title}</Text>
    </View>
  );
};

export default TodoDetalle;
