import React from 'react';
import {FlatList, Text} from 'react-native';
import IAlbum from '../../models/Album';

interface ListaAlbumProps {
  albums: IAlbum[];
}

const ListaAlbum: React.FC<ListaAlbumProps> = ({albums}) => {
  return (
    <FlatList
      data={albums}
      renderItem={({item}) => <Text>{item.title}</Text>}
    />
  );
};

export default ListaAlbum;
