import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const Navbar = (ownProps) => {
  const sessionLinks = () => {
    return (
      <section className="login-signup">
        <button onClick={() => ownProps.openModal('signup')}>signup</button> &nbsp;
        <button onClick={() => ownProps.openModal('login')}>login</button>
      </section>
    );
  };

  const loggedIn = () => {
    return (
      <section className="user-greeting">
        <h2>{ownProps.currentUser.username}</h2>
        <button onClick={ownProps.logout}>logout</button>
      </section>
    );
  };

  return (
    <nav className="navbar">
      <section className="search"></section>
      <section className="logo"><h1>enjambment</h1></section>
      {ownProps.currentUser ? loggedIn() : sessionLinks()}
    </nav>
  );
};

export default Navbar;
