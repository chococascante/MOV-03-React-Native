import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import * as reducers from './src/store/reducers';

const store = createStore(combineReducers(reducers));

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text>Hola</Text>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
