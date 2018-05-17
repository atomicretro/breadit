import React from 'react';

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
    const annotation = Object.assign({}, this.state);
    this.props.createAnnotation(
      annotation, this.props.poemId, this.props.startPos, this.props.endPos
    );
  }

  renderErrors(type) {
    let errors = this.props.errors;
    return(
      <span className="annotation-form-error">{errors[0]}</span>
    );
  }

  clearErrors() {
    this.props.clearErrors([]);
  }

  render () {
    let poemText = document
      .getElementsByClassName('poem-text')[0] || { clientHeight: 0 };
    let poemHeight = poemText.clientHeight;

    return (
      <div style={{minHeight: poemHeight + 39}}
        className="annotation-container">
        <div className="annotation-title">
          <h3>enjambment annotations</h3>
        </div>
        <div className="annotation-form">
          <span className="annotation-instructions">make an annotation!</span>
          <form className="annotation-form">
            <textarea
              value={this.state.body}
              onChange={this.update('body')}
              className="annotation-form-body"
              maxLength="300"
              placeholder="create an annotation" />
            <div className="annotation-baggage">
              {this.renderErrors()}
              <span className="annotation-count" >
                {this.state.body.length}
              </span>
              <button className="annotation-submit"
                onClick={this.handleSubmit}
                type="submit" >
                add annotation
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AnnotationForm;
