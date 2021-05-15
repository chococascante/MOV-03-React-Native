import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Tarea from '../../models/Tarea';
import Checkbox from '@react-native-community/checkbox';
import {useDispatch} from 'react-redux';
import {actualizarTarea, borrarTarea} from '../../store/actions/tareas';

interface ItemListaProps {
  tarea: Tarea;
}

const ItemLista: React.FC<ItemListaProps> = ({tarea}) => {
  const dispatch = useDispatch();

  const handleCheckboxPress = (value: boolean) => {
    console.log('Valor boolean', value);
    dispatch(actualizarTarea({...tarea, completado: value}));
  };

  const handleDeletePress = () => {
    dispatch(borrarTarea(tarea));
  };

  return (
    <View style={styles.contenedor}>
      <Text>{tarea.nombre}</Text>
      <Checkbox onValueChange={handleCheckboxPress} value={tarea.completado} />
      <TouchableOpacity style={styles.botonBorrar} onPress={handleDeletePress}>
        <Text>Borrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  botonBorrar: {
    backgroundColor: '#b1afaf',
    padding: 8,
    borderRadius: 8,
  },
});

export default ItemLista;
