import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateName} from '../store/actions/prueba';

const PruebaFuncion = () => {
  const nombre = useSelector(state => state.nombre); // Saco cosas del store de Redux
  const dispatch = useDispatch(); // Llamo a cambios del store

  useEffect(() => {
    setTimeout(() => {
      dispatch(updateName('Luis'));
    }, 3000);
  }, [dispatch]);

  return (
    <View>
      <Text>Hola Funcion</Text>
      <Text>{nombre}</Text>
    </View>
  );
};

export default PruebaFuncion;
