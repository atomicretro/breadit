import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return ((e) => {
        this.setState({ [field]: e.currentTarget.value });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    debugger
    return(
      <ul>
        {this.props.errors.map((error, idx) => {
          return (
            <li key={`error-${idx}`}>
              {error}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.props.formType} for poetry
          <br />
          <div onClick={this.props.closeModal} className="close-x">x</div>
          {this.renderErrors()}
          <div className="session-form">
            <br />
            <label>username
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="session-input" />
              <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-password" />
            </label>
            <br />
            <input className="session-submit"
              type="submit"
              value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
