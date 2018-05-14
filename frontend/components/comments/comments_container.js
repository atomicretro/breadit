import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import Comments from './comments';

const mapStateToProps = (state) => {
  let comments = state.entities.comments || [];
  return {
    comments: comments
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
