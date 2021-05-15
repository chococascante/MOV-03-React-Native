import {ReducerPrueba} from '../store/reducers/ReducerPrueba';
import {ReducerTareas} from '../store/reducers/ReducerTareas';

export default interface State {
  prueba: ReducerPrueba;
  tareas: ReducerTareas;
}
