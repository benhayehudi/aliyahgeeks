import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import UserReducer from './reducers/UserReducer';

const store = createStore(UserReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

const home = document.querySelector('#container');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, home
);