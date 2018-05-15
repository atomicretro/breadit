import { RECEIVE_ANNOTATION_ERRORS } from '../../actions/annotation_actions';

const AnnotationErrorsReducer = (previousState = [], action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_ANNOTATION_ERRORS:
      return action.errors;
    default:
      return previousState;
  }
};

export default AnnotationErrorsReducer;
