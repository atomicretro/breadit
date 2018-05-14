import { merge } from 'lodash';
import {
  RECEIVE_ALL_POEMS,
  RECEIVE_POEM
} from '../actions/poem_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const CommentsReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_ALL_POEMS:
      return {};
    case RECEIVE_POEM:
      return action.comments;
    case RECEIVE_COMMENT:
      return merge({}, previousState, { [action.comment.id]: action.comment} );
    default:
      return previousState;
  }
};

export default CommentsReducer;
