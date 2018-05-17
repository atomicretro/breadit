import { RECEIVE_POEM_ERRORS } from '../../actions/poem_actions';

const PoemErrorsReducer = (previousState = [], action) => {
  // debugger
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_POEM_ERRORS:
      return action.errors;
    default:
      return previousState;
  }
};

export default PoemErrorsReducer;
