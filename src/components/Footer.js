import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import './Footer.css';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={require('../images/logo.png')} alt="Pet Heaven Logo" className="footer-logo-img" />
          </div>
          <div className="footer-info">
            <p>123 Telok Ayer Street, Animal City, SG 670589</p>
            <p>Email: info@petheaven.org | Phone: (65) 12345678</p>
          </div>
          <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/gallery">Gallery</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
        </div>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="footer-copyright">© 2024 Pet Heaven. All Rights Reserved.</p>
        </div>
      </footer>

);
}

export default Footer;