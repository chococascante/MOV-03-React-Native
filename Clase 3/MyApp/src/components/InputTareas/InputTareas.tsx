import React, {useState} from 'react';
import {TextInput, View, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Tarea from '../../models/Tarea';
import State from '../../models/State';
import {agregarTarea} from '../../store/actions/tareas';

const InputTareas = () => {
  const dispatch = useDispatch();
  const [nuevaTarea, setNuevaTarea] = useState<string>('');

  const tareas = useSelector((state: State) => state.tareas.listaTareas);
  console.log(tareas);

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
