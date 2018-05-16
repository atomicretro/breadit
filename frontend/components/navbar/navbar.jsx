import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const Navbar = (ownProps) => {
  const sessionLinks = () => {
    return (
      <section className="login-signup">
        <button onClick={() => ownProps.openModal('sign up')}>sign up</button> &nbsp;
        <button onClick={() => ownProps.openModal('log in')}>log in</button>
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
      <div className="navbar-top">
        <section className="search"></section>
        <section className="logo">
          <Link to="/"><h1>enjambment</h1></Link>
        </section>
        {ownProps.currentUser ? loggedIn() : sessionLinks()}
      </div>
      <div className="navbar-bottom">
        <Link to="/poems/"
          className="navbar-all-poems">all poems</Link>
        <Link to="/authors/"
          className="navbar-all-authors">all authors</Link>
        <span className="navbar-links-separator">|</span>
        <Link to="/poems/new"
          className="navbar-add-poem">add poem</Link>
        <Link to="/authors/new"
          className="navbar-add-author">add author</Link>
      </div>
    </nav>
  );
};

export default Navbar;
