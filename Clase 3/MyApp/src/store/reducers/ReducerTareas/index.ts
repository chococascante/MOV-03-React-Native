import Action from '../../../models/Action';
import {} from '../../actions/actionTypes';

export default function (state = {}, {type, payload}: Action) {
  switch (type) {
    default:
      return state;
  }
}
