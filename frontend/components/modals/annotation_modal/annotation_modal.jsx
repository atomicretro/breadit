import React from 'react';
import { Route, Link } from 'react-router-dom';
import AnnotationFormContainer from '../../annotations/annotation_forms/annotation_form_container';
import AnnotationItemContainer from '../../annotations/annotation_items/annotation_item_container';

const AnnotationModal = (ownProps) => {
  if (!ownProps.modal) {
    return null;
  }

  return (
    <div className="annotation-modal" onClick={(e) => e.stopPropagation()}>
      <span className="annotation-instructions">
        <Route
          exact path="/poems/:poemId"
          component={AnnotationFormContainer} />
        <Route
          exact path="/poems/:poemId/annotations/:annotationId"
          component={AnnotationItemContainer} />
      </span>
    </div>
  );
};

export default AnnotationModal;
