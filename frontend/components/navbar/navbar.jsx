import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const Navbar = (ownProps) => {
  const sessionLinks = () => {
    return (
      <section className="login-signup">
        <button onClick={openModal}
        <Link to='/signup'>sign up</Link> &nbsp;
        <Link to='/login'>log in</Link>
      </section>
    );
  };

  const loggedIn = () => {
    return (
      <section className="user-greeting">
        <h1>{ownProps.currentUser.username}</h1>
        <button onClick={ownProps.logout}>logout</button>
      </section>
    );
  };

  return (
    <nav className="navbar">
      <section className="logo">enjambment</section>
      {ownProps.currentUser ? loggedIn() : sessionLinks()}
    </nav>
  );
};

export default Navbar;
