import { connect } from 'react-redux';
import PoemIndexItem from './poem_index_item';

const mapStateToProps = (state, ownProps) => {
  const poemInfo = ownProps.poemInfo || { };
  return {
    poemInfo: poemInfo
  };
};

export default connect(
  mapStateToProps
)(PoemIndexItem);
