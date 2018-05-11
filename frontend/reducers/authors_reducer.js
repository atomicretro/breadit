import { merge } from 'lodash';
import { RECEIVE_AUTHOR } from '../actions/author_actions';
import { RECEIVE_POEM } from '../actions/poem_actions';

const AuthorsReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_AUTHOR:
    case RECEIVE_POEM:
      return merge({}, previousState, { [action.author.id]: action.author} );
    default:
      return previousState;
  }
};

export default AuthorsReducer;
