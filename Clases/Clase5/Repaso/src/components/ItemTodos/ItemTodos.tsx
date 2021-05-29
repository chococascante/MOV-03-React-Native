import React from 'react';
import {Text} from 'react-native';
import ITodo from '../../models/Todo';
import styled from '@emotion/native';
import {useDispatch} from 'react-redux';
import {actualizarTodoSeleccionado} from '../../store/actions/Todos/todos';

interface ItemTodosProps {
  todo: ITodo;
}

const ItemTodos: React.FC<ItemTodosProps> = ({todo}) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(actualizarTodoSeleccionado(todo));
  };

  return (
    <Contenedor onPress={handlePress}>
      <Text>{todo.title}</Text>
    </Contenedor>
  );
};

const Contenedor = styled.TouchableOpacity`
  padding: 12px 10px;
`;

export default ItemTodos;
