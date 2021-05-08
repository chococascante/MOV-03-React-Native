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

// Redux genérico, de una vez
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducerPrueba from './src/store/reducers/ReducerPrueba';

const store = createStore(reducerPrueba);
console.log(store);
//

const App = () => {
  return (
    <Provider store={store}>
      <PruebaFuncion />
    </Provider>
  );
};

export default App;
