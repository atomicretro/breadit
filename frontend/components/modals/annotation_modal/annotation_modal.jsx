import React from 'react';

const AnnotationModal = (ownProps) => {
  if (!ownProps.modal) {
    return null;
  }

  return (
    <div className="annotation-modal" onClick={(e) => e.stopPropagation()}>
      hhialsgfilushfludshliuhguldhslu
    </div>
  );
};

export default AnnotationModal;
