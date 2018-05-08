import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//testing
import * as api from './util/session_api_utils';
window.api = api;
//testing

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //testing

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
