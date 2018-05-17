import { connect } from 'react-redux';
import { fetchNewestPoems } from '../../../actions/poem_actions';
import { fetchNewestAuthors } from '../../../actions/author_actions';
import FrontPage from './front_page';

const mapStateToProps = (state) => {
  let poems = state.entities.poems || { };
  let authors = state.entities.authors || { };
  return {
    poems,
    authors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewestPoems: () => dispatch(fetchNewestPoems()),
    fetchNewestAuthors: () => dispatch(fetchNewestAuthors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPage);
