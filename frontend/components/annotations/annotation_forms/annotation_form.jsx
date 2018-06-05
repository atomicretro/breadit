import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return ((e) => {
        this.setState({ [field]: e.currentTarget.value });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let annotation = merge(
      {},
      this.state,
      { poem_id: this.props.poem.id },
      { starting_character: this.props.startPos },
      { ending_character: this.props.endPos }
    );
    // sends up poemid instead of controller getting it from app itself
    // this is bad, fix it!!!

    this.props.createAnnotation(annotation).then((payload) => {
      let newAnnotationId = payload.annotation.id;
      this.props.history.push(
        `/poems/${this.props.poem.id}/annotations/${newAnnotationId}`
      );
    });
  }

  renderErrors() {
    let errors = this.props.errors;
    return(<span className="annotation-form-error">{errors[0]}</span>);
  }

  clearErrors() {
    this.props.clearErrors([]);
  }

  render () {
    return (
      <div className="annotation-form">
        <form className="annotation-form" data="annotation">
          <textarea
            value={this.state.body}
            onChange={this.update('body')}
            className="annotation-form-body"
            maxLength="300"
            placeholder="annotate away!"
            data="annotation" />
          <div className="annotation-baggage" data="annotation">
            {this.renderErrors()}
            <span className="annotation-count" data="annotation" >
              {this.state.body.length}
            </span>
            <button
              className="annotation-submit"
              onClick={this.handleSubmit}
              type="submit"
              data="annotation" >
              add annotation
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(AnnotationForm);
