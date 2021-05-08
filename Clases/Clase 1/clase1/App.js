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

import {Provider} from 'react-redux';

import configureStore from './src/store';

const store = configureStore();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <Text>Hola</Text>
    </Provider>
  );
};

export default App;
