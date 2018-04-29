import { combineReducers } from 'redux';
import userLogin from './users';
import symptoms from './symptoms';

// combine all reducers
const rootReducer = combineReducers({
  userLogin,
  symptoms
});

export default rootReducer;
