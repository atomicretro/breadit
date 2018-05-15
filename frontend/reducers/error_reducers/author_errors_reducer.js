import { RECEIVE_AUTHOR_ERRORS } from '../../actions/author_actions';

const AuthorErrorsReducer = (previousState = [], action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_AUTHOR_ERRORS:
      return action.errors;
    default:
      return previousState;
  }
};

export default AuthorErrorsReducer;
