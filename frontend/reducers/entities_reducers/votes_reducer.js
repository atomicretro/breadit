import merge from 'lodash/merge';
import {
  RECEIVE_VOTE,
  REMOVE_VOTE
} from '../../actions/vote_actions';

const votesReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  switch(action.type){
    case RECEIVE_VOTE:
      return merge({}, previousState, action.vote);
    case REMOVE_VOTE:
      let newState = merge({}, previousState);
      delete newState[action.id];
      return newState;
    default:
      return previousState;
  };
};

export default votesReducer;
