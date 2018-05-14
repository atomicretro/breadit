import * as CommentApiUtils from '../util/comment_api_utils';

// comment action types
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

// synchronous comment action creators
export const receiveComment = ({ comment }) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const receiveCommentErrors = (errors) => {
  return ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
  });
};

// thunk comment action creators
export const createComment = (comment) => (dispatch) => {
  return CommentApiUtils.createComment(comment).then(
    (comment) => {
      return dispatch(receiveComment(comment));
    },
    (errors) => {
      return dispatch(receiveCommentErrors(errors.responseJSON));
    }
  );
};
