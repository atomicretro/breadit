import { RECEIVE_COMMENT_ERRORS } from '../../actions/comment_actions';

const CommentErrorsReducer = (previousState = [], action) => {
  debugger
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    default:
      return previousState;
  }
};

export default CommentErrorsReducer;
