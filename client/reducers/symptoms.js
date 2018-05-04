import { GET_SYMPTOMS } from '../actions/types';

export default function symptoms(state = {}, action) {
  switch(action.type) {
    case GET_SYMPTOMS:
      return Object.assign({}, state, { symptoms: action.symptoms });
    
    default:
      return state;
  }
}
