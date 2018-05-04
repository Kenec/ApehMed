import { combineReducers } from 'redux';
import userLogin from './users';
import symptoms from './symptoms';
import diagnose from './diagnose';

// combine all reducers
const rootReducer = combineReducers({
  userLogin,
  symptoms,
  diagnose
});

export default rootReducer;
