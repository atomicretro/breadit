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
          <span className="form-header">{this.props.formType} for poetry</span>
          <div onClick={this.props.closeModal} className="close-x">x</div>
          {this.renderErrors()}
          <div className="session-form">
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="session-input"
              placeholder="username" />
            <br />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="session-password"
              placeholder="password" />
            <br />
            <button className="session-submit"
              type="submit" >{this.props.formType}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
