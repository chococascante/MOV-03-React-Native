import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const PruebaFuncion = () => {
  const nombre = useSelector(state => state.prueba.nombre);
  return (
    <View>
      <Text>Hola Funcion</Text>
    </View>
  );
};

export default PruebaFuncion;
