import Action from '../../../models/Action';
import Tarea from '../../../models/Tarea';
import {ACTUALIZAR_TAREAS, AGREGAR_TAREA} from '../../actions/actionTypes';

export interface ReducerTareas {
  listaTareas: Tarea[];
}

const initialState = {
  listaTareas: [],
};

export default function (
  state = initialState,
  {type, payload}: Action,
): ReducerTareas {
  switch (type) {
    case AGREGAR_TAREA:
      return {...state, listaTareas: [...state.listaTareas, payload as Tarea]};

    case ACTUALIZAR_TAREAS:
      return {...state, listaTareas: payload as Tarea[]};

    default:
      return state;
  }
}
