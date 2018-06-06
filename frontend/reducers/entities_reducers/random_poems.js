import { merge } from 'lodash';
import {
  RECEIVE_RANDOM_POEMS
} from '../../actions/poem_actions';

const RandomPoemsReducer = (previousState = [], action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_RANDOM_POEMS:
      return action.poems;
    default:
      return previousState;
  }
};

export default RandomPoemsReducer;
