import { connect } from 'react-redux';
import PoemShowItem from './poem_show_item';

const mapStateToProps = (state) => {
  return {
    hi: 'hi'
  };
};

export default connect(
  mapStateToProps
)(PoemShowItem);
