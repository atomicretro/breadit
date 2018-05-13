import { connect } from 'react-redux';
import { fetchPoem } from '../../actions/poem_actions';
import AuthorBar from './author_bar';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPoem: (poemId) => dispatch(fetchPoem(poemId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorBar);
