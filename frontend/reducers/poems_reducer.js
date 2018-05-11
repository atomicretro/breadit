import { merge } from 'lodash';
import {
  RECEIVE_ALL_POEMS,
  RECEIVE_POEM,
  REMOVE_POEM
} from '../actions/poem_actions';

const PoemsReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_ALL_POEMS:
      return merge({}, previousState, action.poems);
    case RECEIVE_POEM:
      return merge({}, previousState, { [action.poem.id]: action.poem} );
    case REMOVE_POEM:
      let newState = merge({}, previousState);
      delete newState[action.poemId];
      return newState;
    default:
      return previousState;
  }
};

export default PoemsReducer;
