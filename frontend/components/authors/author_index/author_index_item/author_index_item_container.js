import { connect } from 'react-redux';
import AuthorIndexItem from './author_index_item';

const mapStateToProps = (state, ownProps) => {
  const authorInfo = ownProps.authorInfo || { };
  return {
    authorInfo: authorInfo
  };
};

export default connect(
  mapStateToProps
)(AuthorIndexItem);
