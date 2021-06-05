import React, {createContext, useContext} from 'react';
import ITodo from '../models/Todo';

interface TodosContextProps {
  todos: ITodo[];
  todoSeleccionado: ITodo;
  setTodos: (todos: ITodo[]) => void;
  setTodoSeleccionado: (todo: ITodo) => void;
}

const TodosContext = createContext({});

const TodosProvider: React.FC = ({children}) => {
  const val = {};
  return <TodosContext.Provider value={val}>{children}</TodosContext.Provider>;
};

export const useTodos = () => useContext(TodosContext);
