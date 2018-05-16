import React from 'react';
import LoginFormContainer from '../../poems/poem_show/poem_show_container';

const PoemModal = (ownProps) => {
  if (!ownProps.modal) {
    return null;
  }


  return (
    <div className="poem-modal-background" onClick={ownProps.closeModal}>
      <div className="poem-modal-child" onClick={(e) => e.stopPropagation()}>
        hhi
      </div>
    </div>
  );
};

export default PoemModal;
