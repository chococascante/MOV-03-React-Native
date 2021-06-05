import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {useAuthentication} from '../../context/authentication';
import State from '../../models/State';
import ListaTodos from '../ListaTodos';
import TodoDetalle from '../TodoDetalle';

const TodosContainer = () => {
  const todoSeleccionado = useSelector(
    (state: State) => state.todos.todoSeleccionado,
  );

  const {fetchUsuarios, usuarios} = useAuthentication();

  console.log(usuarios);

  useEffect(() => {
    async function callFetchUsuarios() {
      await fetchUsuarios();
    }

    callFetchUsuarios();
  }, []);

  return (
    <View>
      {todoSeleccionado ? (
        <TodoDetalle todo={todoSeleccionado} />
      ) : (
        <ListaTodos />
      )}
    </View>
  );
};

export default TodosContainer;
