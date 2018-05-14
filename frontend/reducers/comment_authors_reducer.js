import { merge } from 'lodash';
import {
  RECEIVE_POEM
} from '../actions/poem_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const CommentAuthorsReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_POEM:
      return action.comment_authors;
    case RECEIVE_COMMENT:
      return merge({}, previousState, {
        [action.comment.comment_author_id]: action.comment_author_id
      });
    default:
      return previousState;
  }
};

export default CommentAuthorsReducer;
