import { combineReducers } from 'redux';
import userLogin from './users';

// combine all reducers
const rootReducer = combineReducers({
  userLogin
});

export default rootReducer;
