import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import State from '../../models/State';
import {fetchTodos} from '../../store/actions/Todos/todos';

const ListaTodos = () => {
  const todos = useSelector((state: State) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <FlatList data={todos} renderItem={({item}) => <Text>{item.title}</Text>} />
  );
};

export default ListaTodos;
