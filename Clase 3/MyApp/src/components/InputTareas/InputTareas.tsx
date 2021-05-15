import React, {useState} from 'react';
import {TextInput, View, Button} from 'react-native';
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
    <View>
      <TextInput
        placeholder="Nueva Tarea"
        value={nuevaTarea}
        onChangeText={handleTaskChange}
      />

      <Button onPress={handleButtonPress} title="Agregar Tarea" />
    </View>
  );
};

export default InputTareas;
