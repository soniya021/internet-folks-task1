import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Food Blog. All rights reserved.</p>
      <div className="social-icons">
        <button className="icon-link">Facebook</button>
        <button className="icon-link">Instagram</button>
        <button className="icon-link">Twitter</button>
      </div>
    </footer>
  );
};

export default Footer;
