import React from 'react';
import ListaTodos from './ListaTodos';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';
import ITodo from '../../models/Todo';
import {FlatList} from 'react-native';
import ItemTodos from '../ItemTodos';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockTodoArray: ITodo[] = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
];

describe('ListaTodos', () => {
  it('renders without crashing', () => {
    const store = mockStore({
      todos: {
        todos: [],
      },
    });
    render(
      <Provider store={store}>
        <ListaTodos />
      </Provider>,
    );
  });

  it('renders all elements', () => {
    const store = mockStore({
      todos: {
        todos: mockTodoArray,
      },
    });
    const {UNSAFE_getAllByType} = render(
      <Provider store={store}>
        <ListaTodos />
      </Provider>,
    );

    const lista = UNSAFE_getAllByType(FlatList);
    expect(lista.length).toBe(1);
    const items = UNSAFE_getAllByType(ItemTodos);
    expect(items.length).toBe(5);
  });
});
