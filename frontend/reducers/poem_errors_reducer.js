import { RECEIVE_POEM_ERRORS } from '../actions/poem_actions';

const PoemErrorsReducer = (previousState = [], action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_POEM_ERRORS:
      return action.errors;
    default:
      return previousState;
  }
};

export default PoemErrorsReducer;
