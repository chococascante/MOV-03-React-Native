import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import State from '../../models/State';
import ItemLista from '../ItemLista';

const ListaTareas = () => {
  const listaTareas = useSelector((state: State) => state.tareas.listaTareas);
  console.log('Debugging Tareas', listaTareas);

  return (
    <FlatList
      style={styles.contenedor}
      data={listaTareas}
      renderItem={({item}) => <ItemLista tarea={item} />}
    />
  );
};

const styles = StyleSheet.create({
  contenedor: {
    padding: 24,
  },
});

export default ListaTareas;
