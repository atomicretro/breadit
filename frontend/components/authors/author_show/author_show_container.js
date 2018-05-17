import { connect } from 'react-redux';
import { fetchAuthor } from '../../../actions/author_actions';
import Author from './author_show';

const mapStateToProps = (state, ownProps) => {
  let author = state.entities.authors[ownProps.match.params.authorId] || { };

  return {
    author: author
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAuthor: (authorId) => dispatch(fetchAuthor(authorId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Author);
