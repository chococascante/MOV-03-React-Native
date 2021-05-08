import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const PruebaFuncion = () => {
  const estado = useSelector(state => state);

  console.warn(estado);

  return (
    <View>
      <Text>Hola Funcion</Text>
    </View>
  );
};

export default PruebaFuncion;
