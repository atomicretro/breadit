import * as CommentApiUtils from '../util/comment_api_utils';

// comment action types
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

// synchronous comment action creators
export const receiveComment = ({ comment }) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
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
