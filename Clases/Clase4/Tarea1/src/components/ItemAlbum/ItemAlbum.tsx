import React, {Dispatch, SetStateAction} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import IAlbum from '../../models/Album';

interface ItemAlbumProps {
  album: IAlbum;
  setAlbumSeleccionado: Dispatch<SetStateAction<IAlbum | null>>;
}

const ItemAlbum: React.FC<ItemAlbumProps> = ({album, setAlbumSeleccionado}) => {
  const manejarPress = () => {
    setAlbumSeleccionado(album);
  };

  return (
    <TouchableOpacity onPress={manejarPress} style={styles.contenedor}>
      <Text style={styles.text}>{album.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    padding: 8,
    backgroundColor: '#52B788',
    marginVertical: 4,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

export default ItemAlbum;
