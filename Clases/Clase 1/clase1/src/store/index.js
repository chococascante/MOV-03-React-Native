import {combineReducers, createStore} from 'redux';
import * as reducers from './reducers';
import reducerPrueba from './reducers/reducerPrueba';

const createRootReducer = () => {
  combineReducers({
    ...reducers,
    reducerPrueba,
  });
};

// {
//   prueba: {
//     nombre: ''
//   }
// }

export default function configureStore() {
  const rootReducer = createRootReducer();
  const store = createStore(rootReducer);

  return store;
}
