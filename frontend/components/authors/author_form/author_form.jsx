import React from 'react';

class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToAuthor = this.navigateToAuthor.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  componentWillUnmount() {
    this.clearErrors();
  }

  update(field) {
    return ((e) => {
        this.setState({ [field]: e.currentTarget.value });
    });
  }

  navigateToAuthor(authorId) {
    this.props.history.push(`/authors/${authorId}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    const author = Object.assign({}, this.state);
    this.props.processForm(author).then((response) => {
      this.navigateToAuthor(response.author.id);
    });
  }

  renderError(type) {
    let errors = this.props.errors.authorErrors;
    debugger
    let thisError = '';
    errors.forEach((error) => {
      if (error.includes(type)) {
        thisError = error;
      }
    });

    return(
      <span>{thisError}</span>
    );
  }

  clearErrors() {
    this.props.clearErrors([]);
  }

  render() {
    return (
      <div className="background">
        <div className="author-new-foreground">
          <div className="author-form-container">
            <h2>add an author</h2>
            <hr className="line2" />
            <form className="author-form-box">
              <label>Name:<br />
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="author-form-name"
                  placeholder="name" />
              </label>
              <span className="author-input-error">
                {this.renderError('Name')}
              </span>
              <button className="author-submit"
                onClick={this.handleSubmit}
                type="submit" >
                {this.props.formType}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorForm;
