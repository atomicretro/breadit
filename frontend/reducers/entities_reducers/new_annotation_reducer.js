import { merge } from 'lodash';
import { RECEIVE_NEW_ANNOTATION } from '../../actions/annotation_actions';

const NewAnnotationsReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_NEW_ANNOTATION:
      return merge({}, previousState, action.data );
    default:
      return previousState;
  }
};

export default NewAnnotationsReducer;
