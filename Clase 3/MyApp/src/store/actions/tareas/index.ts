import {Dispatch} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import Action from '../../../models/Action';
import State from '../../../models/State';
import Tarea from '../../../models/Tarea';
import {AGREGAR_TAREA, ACTUALIZAR_TAREAS} from '../actionTypes';

export const agregarTarea = (payload: Tarea): Action => ({
  type: AGREGAR_TAREA,
  payload,
});

export function actualizarTarea(payload: Tarea[]): Action {
  return {
    type: ACTUALIZAR_TAREAS,
    payload,
  };
}

export const borrarTarea = (payload: Tarea) => (
  dispatch: ThunkDispatch<State, null, Action>,
  getState: () => State,
) => {
  console.log(payload);
  const listaTareas: Tarea[] = getState().tareas.listaTareas;

  const indice = listaTareas.findIndex(
    tarea => tarea.nombre === payload.nombre,
  );

  listaTareas[indice] = payload;
  console.log('Tareas enviadas al reducer', listaTareas);
  dispatch(actualizarTarea(listaTareas));
};
