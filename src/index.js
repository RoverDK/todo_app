import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';

const defaultState = {
  todos: [],
}

const reduser = (state = defaultState, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return {...state, todos: state.todos.concat([action.newItem])}
    case 'DELETE_TODO':
      return {...state, todos: state.todos.filter((todo) => todo.id !== action.id)}
    case 'EDIT_TODO':
      return {...state, todos: state.todos.map((todo) => {
        if(todo.id === action.id){
          return {...todo, task: action.payload}
        }else{
          return {...todo}
        }
      })}
    default:
      return state
  }
}

const store = createStore(reduser)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

