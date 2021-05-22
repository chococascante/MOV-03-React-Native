import React, {Dispatch, SetStateAction} from 'react';
import {View, Text, Button} from 'react-native';
import IAlbum from '../../models/Album';

interface AlbumDetalleProps {
  album: IAlbum;
  setAlbumSeleccionado: Dispatch<SetStateAction<IAlbum | null>>;
}

const AlbumDetalle: React.FC<AlbumDetalleProps> = ({
  album,
  setAlbumSeleccionado,
}) => {
  return (
    <View>
      <Text>{album.title}</Text>
      <Button title="Atrás" onPress={() => setAlbumSeleccionado(null)} />
    </View>
  );
};

export default AlbumDetalle;
