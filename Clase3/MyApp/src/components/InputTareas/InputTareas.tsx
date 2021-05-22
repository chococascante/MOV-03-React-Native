import React, {useState} from 'react';
import {TextInput, View, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {agregarTarea} from '../../store/actions/tareas';

const InputTareas = () => {
  const dispatch = useDispatch();
  const [nuevaTarea, setNuevaTarea] = useState<string>('');

  const handleTaskChange = (value: string): void => {
    setNuevaTarea(value);
  };

  const handleButtonPress = () => {
    dispatch(
      agregarTarea({
        nombre: nuevaTarea,
        completado: false,
      }),
    );

    setNuevaTarea('');
  };

  return (
    <View style={styles.contenedor}>
      <TextInput
        placeholder="Nueva Tarea"
        value={nuevaTarea}
        onChangeText={handleTaskChange}
      />

      <Button onPress={handleButtonPress} title="Agregar Tarea" />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    padding: 24,
  },
});

export default InputTareas;
