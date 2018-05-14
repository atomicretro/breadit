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
