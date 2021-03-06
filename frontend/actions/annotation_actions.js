import * as AnnotationApiUtils from '../util/annotation_api_utils';

// annotation action types
export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';
export const RECEIVE_NEW_ANNOTATION = 'RECEIVE_NEW_ANNOTATION';
export const RECEIVE_ANNOTATION_ERRORS = 'RECEIVE_ANNOTATION_ERRORS';

// synchronous annotation action creators
export const receiveAnnotation = ({ annotation, current_user}) => {
  return ({
    type: RECEIVE_ANNOTATION,
    annotation,
    current_user
  });
};

export const receiveNewAnnotation = (data) => {
  return ({
    type: RECEIVE_NEW_ANNOTATION,
    data
  })
}

export const receiveAnnotationErrors = (errors) => {
  return ({
    type: RECEIVE_ANNOTATION_ERRORS,
    errors: errors
  });
};

// thunk annotation action creators
export const fetchAnnotation = (id) => (dispatch) => {
  return AnnotationApiUtils.fetchAnnotation(id).then(
    (payload) => {
      return dispatch(receiveAnnotation(payload));
    },
    (errors) => {
      return dispatch(receiveAnnotationErrors(errors.responseJSON));
    }
  );
};

export const createAnnotation = (annotation, poemId, startPos, endPos) => (dispatch) => {
  return AnnotationApiUtils.createAnnotation(annotation, poemId, startPos, endPos).then(
    (annotation) => {
      return dispatch(receiveAnnotation(annotation));
    },
    (errors) => {
      return dispatch(receiveAnnotationErrors(errors.responseJSON));
    }
  );
};
