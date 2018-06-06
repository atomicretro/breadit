import { connect } from 'react-redux';
import {
  fetchNewestPoems,
  fetchRandomPoems
} from '../../actions/poem_actions';
// import { fetchNewestAuthors } from '../../../actions/author_actions';
import FrontPage from './front_page';

const mapStateToProps = (state) => {
  let poems = state.entities.newestPoems || { };
  return {
    poems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewestPoems: () => dispatch(fetchNewestPoems()),
    fetchNewestAuthors: () => dispatch(fetchNewestAuthors()),
    fetchRandomPoems: () => dispatch(fetchRandomPoems())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPage);
