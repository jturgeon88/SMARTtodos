import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
// TESTING:
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
// TESTING

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // Testing:
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  // Testing

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
