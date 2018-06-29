import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENT_ERRORS
} from '../../actions/comment_actions';
import { RECEIVE_POEM } from '../../actions/poem_actions';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../../actions/session_actions';

const CommentErrorsReducer = (previousState = [], action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
    return action.errors;
    case RECEIVE_POEM:
    case RECEIVE_COMMENT:
    case RECEIVE_CURRENT_USER:
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return previousState;
  }
};

export default CommentErrorsReducer;
