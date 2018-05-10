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
    this.handleGuest = this.handleGuest.bind(this);
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

  handleGuest(e) {
    e.preventDefault();
    this.props.loginGuest().then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul className="session-errors-list">
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
        <form className="login-form-box">
          <div onClick={this.props.closeModal} className="close-x">x</div>
          <span className="form-header">{this.props.formType} for poetry</span>
          <hr className="line1" />
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
          </div>
          <div className="session-form-footer">
            <div className="footer-left">
              <button className="session-submit"
                onClick={this.handleSubmit}
                type="submit" >
                {this.props.formType}
              </button>
              {this.props.otherForm}
            </div>
            <button className="demo-user-button"
              onClick={this.handleGuest}
              type="submit" >
              demo login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
