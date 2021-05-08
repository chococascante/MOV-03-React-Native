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
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducerPrueba from './src/store/reducers/ReducerPrueba';
import thunk from 'redux-thunk';

const store = createStore(reducerPrueba, compose(applyMiddleware(thunk)));
//

const App = () => {
  return (
    <Provider store={store}>
      <PruebaFuncion />
      <PruebaClase />
    </Provider>
  );
};

export default App;
