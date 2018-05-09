import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (ownProps) => {
  const sessionLinks = () => {
    return (
      <section className="login-signup">
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
