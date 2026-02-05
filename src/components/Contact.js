import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaFileAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section contact">
      <h2 className="section-title">Contact & References</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <FaLinkedin className="contact-icon-large" />
          <h3>LinkedIn</h3>
          <p>Connect professionally</p>
          <a 
            href="https://www.linkedin.com/in/alphonce-rotich" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#4a90e2', textDecoration: 'none' }}
          >
            Alphonce Kipkorir Rotich
          </a>
        </div>
        
        <div className="contact-card">
          <FaEnvelope className="contact-icon-large" />
          <h3>Email</h3>
          <p>For inquiries and opportunities</p>
          <a 
            href="mailto:alphoncerotich30@gmail.com"
            style={{ color: '#4a90e2', textDecoration: 'none' }}
          >
            alphoncerotich30@gmail.com
          </a>
        </div>
        
        <div className="contact-card">
          <FaPhone className="contact-icon-large" />
          <h3>Phone</h3>
          <p>Available for calls</p>
          <p style={{ color: '#1e3c72', fontWeight: '500' }}>+254 708 477 938</p>
        </div>
        
        <div className="contact-card">
          <FaFileAlt className="contact-icon-large" />
          <h3>References</h3>
          <p>Professional references</p>
          <p style={{ color: '#666', fontStyle: 'italic' }}>Available upon request</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;