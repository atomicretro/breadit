import { connect } from 'react-redux';
import PoemItem from './poem_item';

const mapStateToProps = (state, ownProps) => {
  const poemInfo = ownProps.poemInfo || { };
  return {
    poemInfo: poemInfo
  };
};

export default connect(
  mapStateToProps
)(PoemItem);
