import { RECEIVE_AUTHOR_ERRORS } from '../../actions/author_actions';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../../actions/session_actions';

const AuthorErrorsReducer = (previousState = [], action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_AUTHOR_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return previousState;
  }
};

export default AuthorErrorsReducer;
