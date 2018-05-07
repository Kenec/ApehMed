import { GET_SICKNESS } from '../actions/types';

export default function sickness(state = {}, action) {
  switch(action.type) {
    case GET_SICKNESS:
      return Object.assign({}, state, { sickness: action.sickness });
    
    default:
      return state;
  }
}
