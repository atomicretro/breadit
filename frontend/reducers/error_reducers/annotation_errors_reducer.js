import {
  RECEIVE_ANNOTATION,
  RECEIVE_ANNOTATION_ERRORS
 } from '../../actions/annotation_actions';
import { RECEIVE_POEM } from '../../actions/poem_actions';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../../actions/session_actions';

const AnnotationErrorsReducer = (previousState = [], action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_ANNOTATION_ERRORS:
      return action.errors;
    case RECEIVE_POEM:
    case RECEIVE_ANNOTATION:
    case RECEIVE_CURRENT_USER:
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return previousState;
  }
};

export default AnnotationErrorsReducer;
