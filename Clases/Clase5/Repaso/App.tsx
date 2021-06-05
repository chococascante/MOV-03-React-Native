import React from 'react';
import {SafeAreaView} from 'react-native';

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './src/store/reducers';
import TodosContainer from './src/components/TodosContainer';
import {AuthenticationProvider} from './src/context/authentication';

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunk)),
);

const App = () => {
  return (
    // High Order Component o HOC
    <Provider store={store}>
      <AuthenticationProvider>
        <SafeAreaView>
          <TodosContainer />
        </SafeAreaView>
      </AuthenticationProvider>
    </Provider>
  );
};

export default App;
