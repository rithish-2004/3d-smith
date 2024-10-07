import { faGoogle } from '@fortawesome/free-brands-svg-icons'; // Import Google icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './PhotoCarousel'; // Ensure you have a Carousel component
import './Registerpage.css';
import logo from './images/logo.png';
const Registerpage = () => {
  return (
    <div className="register-page">
      <img src={logo} alt="Logo" className="logo" /> {/* Add your logo here */}
      <div className="carousel-container">
        <Carousel /> {/* Add your carousel component here */}
      </div>
      <div className="form-container">
        <h2 className="form-title">Register</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Enter your address" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Retype your password" required />
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
        <p className="register-with">-----------   OR   -----------</p>
        <button type="submit" className="register-btn">
          <div className="google-login">
          <FontAwesomeIcon icon={faGoogle} className="google-icon" />
          <span> Register with Google</span>
        </div>
        </button>
        <p className="register-prompt">
        Already have an account?{' '} {/* Changed to "Already have an account?" */}
        <Link to="/registervia" className="register-link">Log In</Link> {/* Updated to route to login page */}
      </p>
      </div>
      
    </div>
  );
};

export default Registerpage;
