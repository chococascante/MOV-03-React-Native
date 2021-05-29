import ITodo from './Todo';

export default interface IAction {
  type: string;
  payload: ITodo[] | ITodo;
}
