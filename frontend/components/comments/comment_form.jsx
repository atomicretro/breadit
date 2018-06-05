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

  render() {
    return (
      <div className="comment-form-container">
        <form className="comment-form">
          <textarea
            value={this.state.body}
            onChange={this.update('body')}
            className="comment-form-body"
            maxLength="500"
            placeholder="write a comment"
            data="comment" />
          <div className="comment-baggage">
            {this.renderErrors()}
            <span className="comment-count" >
              {this.state.body.length}
            </span>
            <button className="comment-submit"
              onClick={this.handleSubmit}
              type="submit"
              data="comment" >
              add comment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;

// comment errors are working now, but they won't clear!!!

// Add "error" when textarea gets to 500 characters saying
// 'max length reached!'

// line 64, to display the submit button and character count only when
// someone starts to write a comment
// className={this.commentBaggage ? "comment-baggage" : "comment-baggage-hide"}
