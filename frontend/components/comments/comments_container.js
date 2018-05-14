import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { createComment } from '../../actions/comment_actions';
import Comments from './comments';

const mapStateToProps = (state, ownProps) => {
  let comments = state.entities.comments || { };
  let commentAuthors = state.entities.commentAuthors || { };
  let commentIds = ownProps.commentIds || [ ];
  if (isEmpty(commentAuthors)) {
    commentIds = [];
  }
  // if above `if` statement is not there, app crashes when going from
  // index => poem show a (w/comments) => index => poem show b (no comments) =>
  // index => poem show a ---- b/c commentAuthors & comments get cleared out
  // from poem show b and DO NOT GET REFETCHED on second poem show a

  return {
    comments: comments,
    commentAuthors: commentAuthors,
    commentIds: commentIds
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => { return dispatch(createComment(comment)); },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
