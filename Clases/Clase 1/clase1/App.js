/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// Redux
import {Provider} from 'react-redux';
import configureStore from './src/store';

// Componentes
import PruebaFuncion from './src/components/PruebaFuncion/PruebaFuncion';

const store = configureStore();

console.warning(store);

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <View>
        <PruebaFuncion />
      </View>
    </Provider>
  );
};

export default App;
