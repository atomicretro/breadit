import React from 'react';
import { withRouter } from 'react-router';
import { Route, Link, Switch } from 'react-router-dom';
import AnnotationFormContainer from '../../annotations/annotation_forms/annotation_form_container';
import AnnotationItemContainer from '../../annotations/annotation_items/annotation_item_container';

class AnnotationModal extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    let poemId = this.props.match.params.poemId;
    this.props.closeModal();
    this.props.history.push(`/poems/${poemId}`);
  }

  render() {
    if (!this.props.modal) {
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
            <h3>enjambment annotation</h3>
            <div
              onClick={this.closeModal}
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
  }
}

export default withRouter(AnnotationModal);
