import {combineReducers, createStore} from 'redux';
import * as reducers from './reducers';

const createRootReducer = () => {
  combineReducers({
    ...reducers,
  });
};

export default function configureStore() {
  const rootReducer = createRootReducer();
  const store = createStore(rootReducer);

  return store;
}
