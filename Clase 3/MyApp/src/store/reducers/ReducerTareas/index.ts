import {} from '../../actions/actionTypes';

interface Action {
  type: string;
  payload: string | [];
}

export default function (state = {}, {type, payload}: Action) {
  switch (type) {
    default:
      return state;
  }
}
