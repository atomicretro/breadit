import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import {
  createComment,
  receiveCommentErrors
} from '../../actions/comment_actions';
import Comments from './comments';

const mapStateToProps = (state, ownProps) => {
  let commentIds = ownProps.commentIds || [ ];
  let comments = commentIds.map((commentId) => {
    return state.entities.comments[commentId];
  });
  let commentAuthors = state.entities.commentAuthors || {
      [state.session.id]: state.entities.users[state.session.id].username
  };
  // if (isEmpty(commentAuthors)) {
  //   commentIds = [];
  // }
  // if above `if` statement is not there, app crashes when going from
  // index => poem show a (w/comments) => index => poem show b (no comments) =>
  // index => poem show a ---- b/c commentAuthors & comments get cleared out
  // from poem show b and DO NOT GET REFETCHED on second poem show a.
  // FIXED!!!! But we're leaving the `if` there for now just in case.

  return {
    comments: comments,
    commentAuthors: commentAuthors,
    commentIds: commentIds,
    errors: state.errors.commentErrors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment, poemId) => {
      return dispatch(createComment(comment, poemId));
    },
    clearErrors: (clear) => { dispatch(receiveCommentErrors(clear)); }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
