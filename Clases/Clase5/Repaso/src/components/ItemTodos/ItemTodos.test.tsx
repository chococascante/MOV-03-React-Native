import React from 'react';
import ItemTodos from './ItemTodos';
import {fireEvent, render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {ACTUALIZAR_TODO_SELECCIONADO} from '../../store/actions/actionTypes';
import {TodoReducer} from '../../store/reducers/Todos/todos';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ItemTodos', () => {
  const mockTodo = {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  };

  it('render without crashing', () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <ItemTodos todo={mockTodo} />
      </Provider>,
    );
  });

  it('renders all elements', () => {
    const store = mockStore({});
    const {getByText} = render(
      <Provider store={store}>
        <ItemTodos todo={mockTodo} />
      </Provider>,
    );
    const texto = getByText(mockTodo.title);
    expect(texto).toBeDefined();
  });

  it('actualiza todo en click', () => {
    const store = mockStore({});
    const {getByTestId} = render(
      <Provider store={store}>
        <ItemTodos todo={mockTodo} />
      </Provider>,
    );

    const contenedor = getByTestId('item-todo-container');
    fireEvent.press(contenedor);

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: ACTUALIZAR_TODO_SELECCIONADO,
      payload: mockTodo,
    });
    // const state = store.getState() as TodoReducer;
    // expect(state.todoSeleccionado).toEqual(mockTodo);
  });
});
