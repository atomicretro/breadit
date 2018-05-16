import { connect } from 'react-redux';
import { fetchAuthors } from '../../../actions/author_actions';
import AuthorIndex from './author_index';

const mapStateToProps = (state) => {
  const authors = state.entities.authors || { };
  return {
    authors: authors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAuthors: () => dispatch(fetchAuthors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorIndex);
