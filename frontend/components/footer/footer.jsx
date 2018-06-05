import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-background">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/poems" className="footer-links-poem">all poems</Link>
          <Link to="/authors" className="footer-links-author">all authors</Link>
        </div>
        <div className="footer-copyright">
          <div className="footer-farewell">
            <span>a clone of <a href="https://www.genius.com">Genius.com</a></span>
            <br />
            <span>created by <a href="http://aleccuccia.com">Alec Cuccia</a></span>
          </div>
          <div className="footer-personal-links">
            <span><a href="https://www.github.com/atomicretro"><i className="fa fa-github"></i></a></span>
            <a href="https://www.linkedin.com/in/alec-cuccia/"><i className="fa fa-linkedin"></i></a>
            <a href="https://angel.co/alec-cuccia/"><i className="fa fa-angellist"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
