import { DIAGNOSE } from '../actions/types';

export default function diagnose(state = {}, action) {
  switch(action.type) {
    case DIAGNOSE:
      return Object.assign({}, state, { diagnosis: action.diagnosis });
    
    default:
      return state;
  }
}
