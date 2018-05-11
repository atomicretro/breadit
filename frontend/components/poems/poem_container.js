import { connect } from 'react-redux';
import { fetchPoem } from '../../actions/poem_actions';
import Poem from './poem';

const mapStateToProps = (state, ownProps) => {
  return {
    poem: state.entities.poems[ownProps.match.params.poemId] || { }
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
)(Poem);
