import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <Link to="/poems" className="footer-links-poem">all poems</Link>
        <Link to="/authors" className="footer-links-author">all authors</Link>
      </div>
      <div className="footer-copyright">
        <span>a clone of <a href="https://www.genius.com">Genius.com</a></span>
        <br />
        <span>created by Alec Cuccia</span>
      </div>
    </div>
  );
};

export default Footer;
