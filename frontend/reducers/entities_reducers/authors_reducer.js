import { merge } from 'lodash';
import {
  RECEIVE_AUTHOR,
  RECEIVE_ALL_AUTHORS
} from '../../actions/author_actions';
import {
  RECEIVE_POEM,
  RECEIVE_ALL_POEMS
} from '../../actions/poem_actions';

const AuthorsReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_ALL_AUTHORS:
    case RECEIVE_ALL_POEMS:
      return merge({}, previousState, action.authors);
    case RECEIVE_AUTHOR:
    case RECEIVE_POEM:
      return merge({}, previousState, { [action.author.id]: action.author} );
    default:
      return previousState;
  }
};

export default AuthorsReducer;
