import { connect } from 'react-redux';
import Lines from './lines';

const mapStateToProps = (state) => {
  return {
    hi: 'hi'
  };
};

export default connect(
  mapStateToProps
)(Lines);
