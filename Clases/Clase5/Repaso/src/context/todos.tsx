import axios from 'axios';
import React, {createContext, useContext, useEffect, useState} from 'react';
import ITodo from '../models/Todo';

interface TodosContextProps {
  todos: ITodo[];
  todoSeleccionado: ITodo | null;
  setTodos: (todos: ITodo[]) => void;
  setTodoSeleccionado: (todo: ITodo) => void;
  fetchTodos: () => Promise<void>;
}

const TodosContext = createContext<TodosContextProps>({
  todos: [],
  todoSeleccionado: null,
  setTodos: () => {},
  setTodoSeleccionado: () => {},
  fetchTodos: () => new Promise(() => {}),
});

export const TodosProvider: React.FC = ({children}) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todoSeleccionado, setTodoSeleccionado] = useState<ITodo | null>(null);

  const fetchTodos = async () => {
    try {
      const todos = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );

      setTodos(todos.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function callFetchTodos() {
      await fetchTodos();
    }

    callFetchTodos();
  }, []);

  const val = {
    todos,
    todoSeleccionado,
    setTodos,
    setTodoSeleccionado,
    fetchTodos,
  };
  return <TodosContext.Provider value={val}>{children}</TodosContext.Provider>;
};

export const useTodos = () => useContext(TodosContext);
