import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return ({
    errors: state.errors.session,
    formType: 'login'
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => {
      return dispatch(login(user));
    },
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);