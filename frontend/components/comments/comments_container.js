import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import Comments from './comments';

const mapStateToProps = (state) => {
  debugger
  let comments = state.entities.comments || { };
  let commentAuthors = state.entities.comment_authors || { };
  return {
    comments: comments,
    commentAuthors: commentAuthors
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
