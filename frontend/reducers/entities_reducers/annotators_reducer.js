import { merge } from 'lodash';
import { RECEIVE_POEM } from '../../actions/poem_actions';
import { RECEIVE_ANNOTATION } from '../../actions/annotation_actions';

const AnnotatorsReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_POEM:
      return merge({}, previousState, action.comment_authors);
    case RECEIVE_ANNOTATION:
      return merge({}, previousState, {
        [action.annotation.comment_author_id]: action.current_user
      });
    default:
      return previousState;
  }
};

export default CommentAuthorsReducer;
