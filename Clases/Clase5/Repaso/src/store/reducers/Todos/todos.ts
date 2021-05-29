import ITodo from '../../../models/Todo';
import IAction from '../../../models/Action';
import {ACTUALIZAR_TODOS} from '../../actions/actionTypes';

export interface TodoReducer {
  todos: ITodo[];
}

const initialState: TodoReducer = {
  todos: [],
};

export default (
  state = initialState,
  {type, payload}: IAction,
): TodoReducer => {
  switch (type) {
    case ACTUALIZAR_TODOS:
      return {...state, todos: payload as ITodo[]};

    default:
      return state;
  }
};
