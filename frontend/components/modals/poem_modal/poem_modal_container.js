import { connect } from 'react-redux';
import PoemModal from './poem_modal';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => {
  return ({
    modal: state.ui.modal
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoemModal);
