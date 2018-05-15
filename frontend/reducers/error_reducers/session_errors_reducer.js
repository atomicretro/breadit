import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../../actions/session_actions';

const SessionErrorsReducer = (previousState = [], action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return previousState;
  }
};

export default SessionErrorsReducer;
