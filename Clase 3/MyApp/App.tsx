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
import {View} from 'react-native';

//Componentes
import InputTareas from './src/components/InputTareas';

// Redux genérico, de una vez
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from './src/store/reducers';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunk)),
);

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <InputTareas />
      </View>
    </Provider>
  );
};

export default App;
