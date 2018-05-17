import React from 'react';

class PoemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      name: '',
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToPoem = this.navigateToPoem.bind(this);
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

  navigateToPoem(poemId) {
    this.props.history.push(`/poems/${poemId}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    const poem = Object.assign({}, this.state);
    this.props.processForm(poem).then((response) => {
      this.navigateToPoem(response.poem.id);
    });
  }

  renderError(type) {
    let errors = this.props.errors.poemErrors;
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
        <div className="foreground">
          <div className="poem-form-container">
            <h2>add a poem</h2>
            <hr className="line2" />
            <form className="poem-form-box">
              <label>Title:<br />
                <input type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  className="poem-form-title"
                  placeholder="title" />
              </label>
              <span className="poem-input-error">
                {this.renderError('Title')}
              </span>
              <br />
              <label>Author:<br />
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="poem-form-author"
                  placeholder="author" />
              </label>
              <span className="poem-input-error">
                {this.renderError('Author')}
              </span>
              <br />
              <div className="poem-body-area">
                <label>Body:<br />
                  <textarea
                    value={this.state.body}
                    onChange={this.update('body')}
                    className="poem-form-body" />
                </label>
                <span className="poem-body-error">
                  <br />{this.renderError('Body')}
                </span>
              </div>
              <br />
              <button className="poem-submit"
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

export default PoemForm;
