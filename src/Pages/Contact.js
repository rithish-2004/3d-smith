import React from 'react';
import { FaEnvelope, FaInstagram, FaPhone, FaYoutube } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="neon-title">Contact Us</h2>
      <h3>If you have any questions or need assistance, feel free to reach out to us!</h3>

      <div className="contact-info">
        <p>
          <FaEnvelope style={{ marginRight: '10px' }} />
          <strong><span className="contact-text">
            <a href="mailto:smith3dofficial@gmail.com" className="contact-link">
              smith3dofficial@gmail.com
            </a>
          </span></strong>
          
        </p>
        <p>
          <FaPhone style={{ marginRight: '10px' }} />
          <strong><span className="contact-text">
            <a href="tel:+7373137643" className="contact-link">
              +91-7373137643
            </a>
          </span></strong>
          
        </p>
      </div>

      <div className="contact-links">
        <h3 className="social-title">Follow Us</h3>
        <a
          href="https://www.instagram.com/your-instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaInstagram size={30} />
          <span>Instagram</span>
        </a>
        <a
          href="https://www.youtube.com/channel/your-youtube"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaYoutube size={30} />
          <span>YouTube</span>
        </a>
      </div>

      <footer className="footer">
        <h3>
          3dSmith is committed to delivering exceptional 3D printing services and customer satisfaction. Your feedback is important to us!
        </h3>
      </footer>
    </div>
  );
};

export default Contact;
