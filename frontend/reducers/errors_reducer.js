import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import PoemErrorsReducer from './poem_errors_reducer';

const ErrorsReducer = combineReducers({
  sessionErrors: SessionErrorsReducer,
  poemErrors: PoemErrorsReducer
});

export default ErrorsReducer;
