/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, Text, Alert} from 'react-native';

const App = () => {
  useEffect(() => {
    console.log('hola');
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        console.log('Hola');
        return response.json();
      })
      .then(json => Alert.alert(json))
      .catch(error => Alert.alert(error))
      .finally(() => Alert.alert('Finally'));
  }, []);

  return (
    <SafeAreaView>
      <Text>Hola</Text>
    </SafeAreaView>
  );
};

export default App;
