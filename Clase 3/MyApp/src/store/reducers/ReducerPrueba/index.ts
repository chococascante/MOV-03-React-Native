import Action from '../../../models/Action';
import {
  UPDATE_NAME,
  UPDATE_LASTNAME,
  UPDATE_POSTS,
} from '../../actions/actionTypes';

const initialState = {
  nombre: '',
  apellido: '',
  edad: null,
  posts: [],
};

export default function (state = initialState, {type, payload}: Action) {
  switch (type) {
    case UPDATE_NAME:
      return {...state, nombre: payload};

    case UPDATE_LASTNAME:
      return {...state, apellido: payload};

    case UPDATE_POSTS:
      return {...state, posts: payload};

    default:
      return state;
  }
}
