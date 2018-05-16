import React from 'react';
import LoginFormContainer from '../../session_form/login_form_container';
import SignupFormContainer from '../../session_form/signup_form_container';

const Modal = (ownProps) => {
  if (!ownProps.modal) {
    return null;
  }

  let component;
  switch (ownProps.modal) {
    case 'log in':
      component = <LoginFormContainer />;
      break;
    case 'sign up':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={ownProps.closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
};

export default Modal;
