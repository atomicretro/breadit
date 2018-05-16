import React from 'react';
import LoginFormContainer from '../../poems/poem_show/poem_show_container';

const PoemModal = (ownProps) => {
  if (!ownProps.modal) {
    return null;
  }

  return (
    <div className="poem-modal" onClick={(e) => e.stopPropagation()}>
      hhi
    </div>
  );
};

export default PoemModal;
