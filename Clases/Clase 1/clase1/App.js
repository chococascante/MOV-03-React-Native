/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text} from 'react-native';

// Redux
import {Provider} from 'react-redux';
import configureStore from './src/store';

// Componentes
import PruebaFuncion from './src/components/PruebaFuncion/PruebaFuncion';

const store = configureStore();

const App = () => {
  return (
    <View>
      <Text>Hola</Text>
    </View>
  );
};

export default App;
