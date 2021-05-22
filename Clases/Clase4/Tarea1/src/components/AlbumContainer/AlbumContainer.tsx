import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import IAlbum from '../../models/Album';
import ListaAlbum from '../ListaAlbum';

const AlbumContainer = () => {
  const [albums, setAlbums] = useState<IAlbum[] | null>(null);
  // const [cargando, setCargando] = useState(false);

  const cargarAlbums = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/albums');
      const dataAlbums = await data.json();
      setAlbums(dataAlbums);
    } catch (error) {
      console.error(error);
    }
  };

  // Es como llamar componentDidMount
  useEffect(() => {
    async function llamarCargarAlbums() {
      await cargarAlbums();
    }

    llamarCargarAlbums();
  }, []);

  return (
    <View>
      {albums ? <ListaAlbum albums={albums} /> : <Text>Cargando</Text>}
    </View>
  );
};

export default AlbumContainer;
