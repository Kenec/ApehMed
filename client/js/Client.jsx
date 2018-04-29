import React from 'react';
import { render } from 'react-dom';
import jwt from 'jsonwebtoken';
import { Provider } from 'react-redux';
import configureStore from '../store/store';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { setCurrentUser } from '../actions/signinActions';
import App from '../components/App';
import '../scss/main.css';

const store = configureStore();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser({
    email: jwt.decode(localStorage.jwtToken).email,
    id: jwt.decode(localStorage.jwtToken).id  
  }));
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

