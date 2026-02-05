import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const profileImage =   require('../assets/profile.jpg');
const Header = () => {
  return (
    <header className="header">
          <div className="header-content">
               {/* Profile Image Section */}
        <div className="profile-image-container">
          <img 
            src={profileImage} 
            alt="Alphonce Rotich" 
            className="profile-image"
          />
          <div className="image-overlay">
            <span className="overlay-text">Software Engineer</span>
          </div>
        </div>
        <div className="header-info">
          <h1>Alphonce Rotich</h1>
          <p>Software Engineer</p>
        </div>
        <div className="contact-info">
          <a href="https://www.linkedin.com/in/alphonce-rotich/" className="contact-item" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:alphoncerotich30@gmail.com" className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>alphoncerotich30@gmail.com</span>
          </a>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+254 708 477 938</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;