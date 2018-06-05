import { RECEIVE_POEM_ERRORS } from '../../actions/poem_actions';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../../actions/session_actions';

const PoemErrorsReducer = (previousState = [], action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_POEM_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return previousState;
  }
};

export default PoemErrorsReducer;
