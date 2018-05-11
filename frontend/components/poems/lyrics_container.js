import { connect } from 'react-redux';
import Lyrics from './lyrics';

const mapStateToProps = (state) => {
  return {
    hi: 'hi'
  };
};

export default connect(
  mapStateToProps
)(Lyrics);
