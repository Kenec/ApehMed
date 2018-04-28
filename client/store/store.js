import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers = compose;

const finalCreateStore = composeEnhancers(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

/**
 * configureStore - configure store for redux
 * @param  {object} initialState defines the initial state of the store
 * @return {method} returns the finalCreateStore method
 */
export default function configureStore(initialState = {}) {
  return finalCreateStore(rootReducer, initialState);
}