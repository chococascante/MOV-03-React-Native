import axios from 'axios';
import React, {ReactNode, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import IAlbum from '../../models/Album';
import ListaAlbum from '../ListaAlbum';

const AlbumContainer = () => {
  const [albums, setAlbums] = useState<IAlbum[] | null>(null);
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [albumSeleccionado, setAlbumSeleccionado] =
    useState<IAlbum | null>(null);

  const cargarAlbums = async () => {
    try {
      const dataAlbums = await fetch(
        'https://jsonplaceholder.typicode.com/albums',
      );
      const dataAlbumsJSON = await dataAlbums.json();

      const dataPhotos = await fetch(
        'https://jsonplaceholder.typicode.com/photos',
      );
      const dataPhotosJSON = await dataPhotos.json();

      setAlbums(dataAlbumsJSON);
      setPhotos(dataPhotosJSON);

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const cargarAlbumsPromise = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(data => {
        data
          .json()
          .then(dataAlbums => setAlbums(dataAlbums))
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(data => {
        data
          .json()
          .then(dataAlbums => setAlbums(dataAlbums))
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  };

  // Es como llamar componentDidMount
  useEffect(() => {
    async function llamarCargarAlbums() {
      await cargarAlbums();
    }

    llamarCargarAlbums();
  }, []);

  const mostrarListaODetalle = (): ReactNode => {
    if (albumSeleccionado) {
      return <Text>Album</Text>;
    } else if (albums) {
      return <ListaAlbum albums={albums} />;
    }

    return null;
  };

  return (
    <View>
      {loading ? <ActivityIndicator /> : <>{mostrarListaODetalle()}</>}
    </View>
  );
};

export default AlbumContainer;
