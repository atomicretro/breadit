import { merge } from 'lodash';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const SessionReducer = (previousState = {id: null}, action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return { id: null };
    default:
      return previousState;
  }
};

export default SessionReducer;
