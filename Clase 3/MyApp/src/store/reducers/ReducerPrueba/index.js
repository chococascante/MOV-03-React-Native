import {UPDATE_NAME, UPDATE_LASTNAME} from '../../actions';

const initialState = {
  nombre: '',
  apellido: '',
  edad: null,
};

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case UPDATE_NAME:
      return {...state, nombre: payload};

    case UPDATE_LASTNAME:
      return {...state, apellido: payload};

    default:
      return state;
  }
}
