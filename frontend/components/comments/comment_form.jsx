import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };

    this.commentBaggage = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // componentWillUpdate() {
  //   this.clearErrors();
  // }

  update(field) {
    if (this.state[field].length === 0) {
      this.commentBaggage = false;
    } else {
      this.commentBaggage = true;
    }

    return ((e) => {
        this.setState({ [field]: e.currentTarget.value });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    this.props.createComment(comment, this.props.poemId).then(
      this.state.body = ''
    ); //USE PROMISES TO KEEP COMMENT BODY IN TEXTAREA IF ERRORS RENDER
  }

  renderErrors(type) {
    let errors = this.props.errors;
    return(
      <span className="comment-form-error">{errors[0]}</span>
    );
  }

  clearErrors() {
    this.props.clearErrors([]);
  }

  render() {
    return (
      <div className="comment-form-container">
        <form className="comment-form">
          <textarea
            value={this.state.body}
            onChange={this.update('body')}
            className="comment-form-body"
            placeholder="write a comment" />
          <div className="comment-baggage">

            <span className="comment-count" >
              {this.state.body.length}
            </span>
            <button className="comment-submit"
              onClick={this.handleSubmit}
              type="submit" >
              add comment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;

// line 60, MAKE THIS WORK ==> errors: undefined in comment_errors_reducer
// {this.renderErrors()}
// actually that only happens when componentWillUpdate w/ clearErrors() is
// there, otherwise the errors just never unrender... so fix that, too

// line 64, to display the submit button and character count only when
// someone starts to write a comment
// className={this.commentBaggage ? "comment-baggage" : "comment-baggage-hide"}
