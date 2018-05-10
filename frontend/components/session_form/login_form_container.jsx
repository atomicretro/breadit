import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return ({
    errors: state.errors,
    formType: 'log in'
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => {
      return dispatch(login(user));
    },
    otherForm: (
      <button className="other-form-button"
        onClick={() => dispatch(openModal('sign up'))}>
        or sign up instead
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
