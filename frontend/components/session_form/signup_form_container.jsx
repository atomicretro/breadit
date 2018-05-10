import { connect } from 'react-redux';
import React from 'react';
import { login, signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return ({
    errors: state.errors,
    formType: 'sign up'
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => {
      return dispatch(signup(user));
    },
    otherForm: (
      <button className="other-form-button"
        onClick={() => dispatch(openModal('log in'))}>
        or log in instead
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    loginGuest: () => {
      return dispatch(login({
        username: 'guest',
        password: 'guestlogin'
      }));
    }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
