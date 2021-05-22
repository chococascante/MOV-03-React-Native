import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IAlbum from '../../models/Album';

interface ItemAlbumProps {
  album: IAlbum;
}

const ItemAlbum: React.FC<ItemAlbumProps> = ({album}) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.text}>{album.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    padding: 8,
  },
  text: {
    fontSize: 24,
  },
});

export default ItemAlbum;
