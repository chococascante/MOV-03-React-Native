/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducerPrueba from './src/store/reducers/ReducerPrueba';

const store = createStore(reducerPrueba);
const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Hola</Text>
      </View>
    </Provider>
  );
};

export default App;
