import {combineReducers, createStore} from 'redux';
import * as reducers from './reducers';

const createRootReducer = history => {
  combineReducers({
    ...reducers,
  });
};

export default function configureStore() {
  const store = createStore(createRootReducer());

  return store;
}
