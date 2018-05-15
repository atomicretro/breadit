import * as CommentApiUtils from '../util/comment_api_utils';

// comment action types
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';

// synchronous comment action creators
export const receiveComment = ({ comment, current_user}) => {
  return {
    type: RECEIVE_COMMENT,
    comment,
    current_user
  };
};

export const receiveCommentErrors = (errors) => {
  return ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
  });
};

export const clearComments = () => {
  return ({
    type: CLEAR_COMMENTS,
    comments: {}
  })
}

// thunk comment action creators
export const createComment = (comment, poemId) => (dispatch) => {
  return CommentApiUtils.createComment(comment, poemId).then(
    (comment) => {
      return dispatch(receiveComment(comment));
    },
    (errors) => {
      return dispatch(receiveCommentErrors(errors.responseJSON));
    }
  );
};
