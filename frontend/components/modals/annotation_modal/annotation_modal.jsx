import React from 'react';
import { withRouter } from 'react-router';
import { Route, Link, Switch } from 'react-router-dom';
import AnnotationFormContainer from '../../annotations/annotation_forms/annotation_form_container';
import AnnotationItemContainer from '../../annotations/annotation_items/annotation_item_container';

class AnnotationModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.modal) {
      return null;
    }

    let poemText = document
      .getElementsByClassName('poem-text')[0] || { clientHeight: 0 };
    let poemHeight = poemText.clientHeight;

    return (
      <div
        className="annotation-modal"
        onClick={ (e) => e.stopPropagation() }
        data="annotation" >
        <div
          style={ {minHeight: poemHeight + 39} }
          className="annotation-container"
          data="annotation" >
          <div
            className="annotation-title"
            data="annotation" >
            <h3 data="annotation">enjambment annotation</h3>
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
  }
}

export default withRouter(AnnotationModal);
