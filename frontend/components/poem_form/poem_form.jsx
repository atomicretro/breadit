import React from 'react';

class PoemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.clearErrors();
  }

  update(field) {
    return ((e) => {
        this.setState({ [field]: e.currentTarget.value });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const poem = Object.assign({}, this.state);
    this.props.processForm(poem);
  }

  renderErrors() {
    let errors = this.props.errors.poemErrors;
    return(
      <ul className="poem-errors-list">
        {errors.map((error, idx) => {
          return (
            <li key={`poem-error-${idx}`}>
              {error}
            </li>
          );
        })}
      </ul>
    );
  }

  clearErrors() {
    this.props.clearErrors([]);
  }

  render(){
    // debugger
    return(
      <div className="poem-form-container">
        <form className="poem-form-box">
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}
            className="poem-form-title"
            placeholder="title" />
          <br />
          <input type="text"
            value={this.state.author}
            onChange={this.update('author')}
            className="poem-form-author"
            placeholder="author" />
          <br />
          <textarea
            value={this.state.body}
            onChange={this.update('body')}
            className="poem-form-body" />
          <br />
          <button className="poem-submit"
            onClick={this.handleSubmit}
            type="submit" >
            {this.props.formType}
          </button>
        </form>
      </div>
    );
  }
}

export default PoemForm;
