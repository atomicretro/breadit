import { merge } from 'lodash';
import {
  RECEIVE_ALL_POEMS,
  RECEIVE_POEM,
  REMOVE_POEM
} from '../../actions/poem_actions';
import { RECEIVE_AUTHOR } from '../../actions/author_actions';
import { RECEIVE_COMMENT } from '../../actions/comment_actions';
import { RECEIVE_ANNOTATION } from '../../actions/annotation_actions';
import {
  RECEIVE_VOTE,
  REMOVE_VOTE
} from '../../actions/vote_actions';

const PoemsReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  debugger
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POEMS:
      return merge({}, previousState, action.poems);
    case RECEIVE_POEM:
      return merge({}, previousState, { [action.poem.id]: action.poem });
    case REMOVE_POEM:
      newState = merge({}, previousState);
      delete newState[action.poemId];
      return newState;
    case RECEIVE_AUTHOR:
      return merge({}, previousState, action.poems);
    case RECEIVE_COMMENT:
      newState = merge({}, previousState);
      newState[action.comment.poem_id].comment_ids.push(action.comment.id);
      return newState;
    case RECEIVE_ANNOTATION:
      newState = merge({}, previousState);
      newState[action.annotation.poem_id].annotation_ids.push(action.annotation.id);
      return newState;
    case RECEIVE_VOTE:
      return merge({}, previousState, { [action.poem.id]: action.poem });
    case REMOVE_VOTE:
      return merge({}, previousState, { [action.poem.id]: action.poem });
    default:
      return previousState;
  };
};

export default PoemsReducer;
