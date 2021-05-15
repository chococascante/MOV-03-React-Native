import Action from '../../../models/Action';
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
