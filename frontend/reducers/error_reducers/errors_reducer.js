import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import PoemErrorsReducer from './poem_errors_reducer';
import AuthorErrorsReducer from './author_errors_reducer';
import CommentErrorsReducer from './comment_errors_reducer';

const ErrorsReducer = combineReducers({
  sessionErrors: SessionErrorsReducer,
  poemErrors: PoemErrorsReducer,
  authorErrors: AuthorErrorsReducer,
  commentErrors: CommentErrorsReducer
});

export default ErrorsReducer;
