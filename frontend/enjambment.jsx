import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//testing
import * as api from './util/session_api_utils';
window.api = api;
import * as acts from './actions/session_actions';
window.acts = acts;
import * as votesApi from './util/vote_api_utils';
window.votesApi = votesApi;
//testing

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //testing

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
