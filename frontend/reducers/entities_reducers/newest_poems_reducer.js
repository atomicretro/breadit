import { merge } from 'lodash';
import {
  RECEIVE_NEWEST_POEMS
} from '../../actions/poem_actions';

const NewestPoemsReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_NEWEST_POEMS:
      return merge({}, previousState, action.poems);
    default:
      return previousState;
  }
};

export default NewestPoemsReducer;
