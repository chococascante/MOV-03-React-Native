import React, {useState} from 'react';
import {TextInput, View, Button} from 'react-native';

const InputTareas = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>('');

  const handleTaskChange = (value: string): void => {
    setNuevaTarea(value);
  };

  return (
    <View>
      <TextInput
        placeholder="Nueva Tarea"
        value={nuevaTarea}
        onChangeText={handleTaskChange}
      />

      <Button onPress={() => console.log('Hola')} title="Agregar Tarea" />
    </View>
  );
};

export default InputTareas;
