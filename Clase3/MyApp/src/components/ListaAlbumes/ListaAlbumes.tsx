import React from 'react';
import {View, Text} from 'react-native';

const ListaAlbumes = () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/albums');
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default ListaAlbumes;
