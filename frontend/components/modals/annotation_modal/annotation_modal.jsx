import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import AnnotationFormContainer from '../../annotations/annotation_forms/annotation_form_container';
import AnnotationItemContainer from '../../annotations/annotation_items/annotation_item_container';

const AnnotationModal = (ownProps) => {
  if (!ownProps.modal) {
    return null;
  }

  let poemText = document
    .getElementsByClassName('poem-text')[0] || { clientHeight: 0 };
  let poemHeight = poemText.clientHeight;

  return (
    <div className="annotation-modal" onClick={(e) => e.stopPropagation()}>
      <div style={{minHeight: poemHeight + 39}}
        className="annotation-container">
        <div className="annotation-title">
          <h3>enjambment annotations</h3>
          <div
            onClick={ownProps.closeModal}
            className="annotation-close-x">x</div>
        </div>
        <Switch>
          <Route
            exact path="/poems/:poemId/annotations/:annotationId"
            component={AnnotationItemContainer} />
          <Route
            exact path="/poems/:poemId"
            component={AnnotationFormContainer} />
        </Switch>
      </div>
    </div>
  );
};

export default AnnotationModal;
