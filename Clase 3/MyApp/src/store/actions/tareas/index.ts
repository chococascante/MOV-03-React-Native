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

export function actualizarListaTareas(payload: Tarea[]): Action {
  return {
    type: ACTUALIZAR_TAREAS,
    payload,
  };
}

export const actualizarTarea = (payload: Tarea) => (
  dispatch: ThunkDispatch<State, null, Action>,
  getState: () => State,
) => {
  const listaTareas: Tarea[] = getState().tareas.listaTareas;

  const nuevaLista = listaTareas.map(tarea => {
    if (tarea.nombre === payload.nombre) {
      return payload;
    } else {
      return tarea;
    }
  });
  dispatch(actualizarListaTareas(nuevaLista));
};

export const borrarTarea = (payload: Tarea) => (
  dispatch: ThunkDispatch<State, null, Action>,
  getState: () => State,
) => {
  const listaTareas: Tarea[] = getState().tareas.listaTareas;

  const nuevaLista = listaTareas.filter(
    tarea => tarea.nombre !== payload.nombre,
  );
  dispatch(actualizarListaTareas(nuevaLista));
};
