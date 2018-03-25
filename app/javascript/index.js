import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux'
import thunk from 'redux-thunk';
import App from './App';
import UserReducer from './reducers/UserReducer';
import PostReducer from './reducers/PostReducer';
import CommentReducer from './reducers/CommentReducer';

const rootReducer = combineReducers({users: UserReducer, posts: PostReducer, comments: CommentReducer })

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

const home = document.querySelector('#container');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, home
);