import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Food Blog. All rights reserved.</p>
      <div className="social-icons">
        <a href="#" className="icon-link">Facebook</a>
        <a href="#" className="icon-link">Instagram</a>
        <a href="#" className="icon-link">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
