import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UsersReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, previousState, { [action.currentUser.id]: action.currentUser} );
    default:
      return previousState;
  }
};

export default UsersReducer;
