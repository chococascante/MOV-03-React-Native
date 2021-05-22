import Tarea from './Tarea';

export default interface Action {
  type: string;
  payload: string | Tarea[] | Tarea;
}
