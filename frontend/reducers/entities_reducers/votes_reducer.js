import merge from 'lodash/merge';
import { RECEIVE_POEM } from '../../actions/poem_actions';
import { REMOVE_VOTE } from '../../actions/vote_actions';

const votesReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  debugger
  switch(action.type){
    case RECEIVE_POEM:
      return merge({}, previousState, action.votes);
    case REMOVE_VOTE:
      let newState = merge({}, previousState);
      delete newState[action.id];
      return newState;
    default:
      return previousState;
  };
};

export default votesReducer;
