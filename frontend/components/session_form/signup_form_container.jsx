import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return ({
    errors: state.errors.session,
    formType: 'signup'
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => {
      return dispatch(signup(user));
    },
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
