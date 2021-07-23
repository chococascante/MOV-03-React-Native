//import React in our code.
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
//import all the components we are going to use.
import axios from 'axios';
import React, {useEffect} from 'react';

const RoutineScreen: React.FC = () => {
  const getDataUsingSimpleGetCall = async () => {
    console.log('Hola');
    const resultado = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
    );
    console.log(resultado.data);
  };

  useEffect(() => {
    async function callFetchTodos() {
      await getDataUsingSimpleGetCall();
    }

    callFetchTodos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, textAlign: 'center'}}>Tests</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text>getDataUsingSimpleGetCall</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default RoutineScreen;
