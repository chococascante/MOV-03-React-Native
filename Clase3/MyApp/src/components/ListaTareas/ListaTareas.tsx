import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import State from '../../models/State';
import ItemLista from '../ItemLista';

const ListaTareas = () => {
  const listaTareas = useSelector((state: State) => state.tareas.listaTareas);

  const [listaA, setListaA] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getAlbums = async () => {
    try {
      console.log('en la función');
      const data = await axios.get(
        'http://jsonplaceholder.typicode.com/albums',
      );

      console.log(data);
      setListaA(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  const loadContent = async () => {
    try {
      const data = await axios.get('http://jsonplaceholder.typicode.com/posts');

      console.log(data);

      setPosts(data.data);
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    async function callGetAlbums() {
      await loadContent();
    }

    callGetAlbums();
  }, []);

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
