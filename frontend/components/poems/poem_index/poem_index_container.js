import { connect } from 'react-redux';
import { fetchPoems } from '../../../actions/poem_actions';
import { fetchAuthors } from '../../../actions/author_actions';
import PoemIndex from './poem_index';

const mapStateToProps = (state) => {
  const poems = state.entities.poems || { };
  const authors = state.entities.authors || { };
  return {
    poems,
    authors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPoems: () => dispatch(fetchPoems())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoemIndex);
