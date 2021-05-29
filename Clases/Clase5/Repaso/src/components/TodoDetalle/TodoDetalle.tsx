import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import ITodo from '../../models/Todo';
import {actualizarTodoSeleccionado} from '../../store/actions/Todos/todos';

interface TodoDetalleProps {
  todo: ITodo;
}

const TodoDetalle: React.FC<TodoDetalleProps> = ({todo}) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(actualizarTodoSeleccionado(null));
  };

  return (
    <View>
      <Text>Usuario: {todo.userId}</Text>
      <Text>{todo.title}</Text>
      <Button title="Atrás" onPress={handlePress} />
    </View>
  );
};

export default TodoDetalle;
