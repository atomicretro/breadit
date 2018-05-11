import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    lyrics: 'lyrics'
  };
};

export default connect(
  mapStateToProps
)(Lyrics);
