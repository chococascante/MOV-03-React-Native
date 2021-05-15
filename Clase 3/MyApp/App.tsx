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

//Componentes
import PruebaFuncion from './src/components/PruebaFuncion';
import PruebaClase from './src/components/PruebaClases';

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
      <PruebaFuncion />
      <PruebaClase />
    </Provider>
  );
};

export default App;
