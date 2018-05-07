import { combineReducers } from 'redux';
import userLogin from './users';
import symptoms from './symptoms';
import diagnose from './diagnose';
import sickness from './sickness';

// combine all reducers
const rootReducer = combineReducers({
  userLogin,
  symptoms,
  diagnose,
  sickness
});

export default rootReducer;
