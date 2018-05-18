import { connect } from 'react-redux';
import FrontPageItem from './front_page_item';

const mapStateToProps = (state, ownProps) => {
  const poemInfo = ownProps.poemInfo || { };
  const index = ownProps.index || { };
  return {
    index,
    poemInfo
  };
};

export default connect(
  mapStateToProps
)(FrontPageItem);

// REFACTOR TO GET RID OF THIS
