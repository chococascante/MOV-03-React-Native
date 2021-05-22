import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const AlbumContainer = () => {
  const [albums, setAlbums] = useState(null);
  const [cargando, setCargando] = useState(false);

  const cargarAlbums = async () => {
    try {
      console.log('Antes del error');
      const data = await fetch('https://jsonplaceholder.typicode.com/albums');
      console.log('despues del log');
      console.log(data);
      // setAlbums(data.data);
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
      <Text>Hola</Text>
    </View>
  );
};

export default AlbumContainer;
