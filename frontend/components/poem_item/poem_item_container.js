import { connect } from 'react-redux';
import PoemItem from './poem_item';

const mapStateToProps = (state) => {
  const poems = state.entities.poems || { };
  return {
    poems: poems
  };
};

export default connect(
  mapStateToProps
)(PoemItem);
