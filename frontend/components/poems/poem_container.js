import { connect } from 'react-redux';
import Poem from './poem';

const mapStateToProps = (state) => {
  return {
    hi: 'hi'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bye: 'bye'
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poem);
