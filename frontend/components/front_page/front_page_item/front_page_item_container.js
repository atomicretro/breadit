import { connect } from 'react-redux';
import FrontPageItem from './front_page_item';

const mapStateToProps = (state, ownProps) => {
  const poemInfo = ownProps.poemInfo || { };
  return {
    poemInfo: poemInfo
  };
};

export default connect(
  mapStateToProps
)(FrontPageItem);

// REFACTOR TO GET RID OF THIS
