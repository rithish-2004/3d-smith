import { faGoogle } from '@fortawesome/free-brands-svg-icons'; // Import Google icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import './LoginPage.css';
import Carousel from './PhotoCarousel'; // Ensure you have a Carousel component
const Registerpage = () => {
  return (
    <div className="register-page">
      <img src={logo} alt="Logo" className="logo" /> {/* Add your logo here */}
      <div className="carousel-container">
        <Carousel /> {/* Add your carousel component here */}
      </div>
      <div className="form-container">
        <h2 className="form-title">Log In</h2>
        <form>
          <div className="form-group">
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
        <p className="register-with">-----------   OR   -----------</p>
        <button type="submit" className="register-btn">
          <div className="google-login">
          <FontAwesomeIcon icon={faGoogle} className="google-icon" />
          <span> Log in with Google</span>
        </div>
        </button>
        <p className="register-prompt">
        Dont have an account?{' '} {/* Changed to "Already have an account?" */}
        <Link to="/loginvia" className="register-link">Register</Link> {/* Updated to route to login page */}
      </p>
      </div>
    </div>
  );
};

export default Registerpage;
