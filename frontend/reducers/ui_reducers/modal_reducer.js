import {
  OPEN_MODAL,
  OPEN_ANNOTATION_MODAL,
  CLOSE_MODAL
} from '../../actions/modal_actions';

const ModalReducer = (previousState = null, action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case OPEN_ANNOTATION_MODAL:
      return action.data;
    case CLOSE_MODAL:
      return null;
    default:
      return previousState;
  }
};

export default ModalReducer;
