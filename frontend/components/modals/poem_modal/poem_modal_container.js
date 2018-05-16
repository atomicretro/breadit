import { connect } from 'react-redux';
import PoemModal from './poem_modal';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    modal: state.ui.modal
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoemModal);
