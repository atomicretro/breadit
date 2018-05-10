import { connect } from 'react-redux';
import AuthorBar from './author_bar';

const mapStateToProps = (state) => {
  return {
    bye: 'bye'
  };
};

export default connect(
  mapStateToProps
)(AuthorBar);
