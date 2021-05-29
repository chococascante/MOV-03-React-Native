import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import State from '../../models/State';
import {fetchTodos} from '../../store/actions/Todos/todos';

const TodosContainer = () => {
  const todos = useSelector((state: State) => state.todos.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(fetchTodos());
  };

  return (
    <View>
      <Text>Todos</Text>
      <Button title="Traer Todos" onPress={handlePress} />
    </View>
  );
};

export default TodosContainer;
