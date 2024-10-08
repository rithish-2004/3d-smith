import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, db } from '../firebase';
import Carousel from './PhotoCarousel';
import './Registerpage.css';
import logo from './images/logo.png';
const Registerpage = () => {
  // State variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState(''); // Error state for password
  const navigate = useNavigate(); // Initialize navigate function

  const validatePassword = () => {
    let isValid = true;
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false;
        setPasswordError('Passwords do not match');
      } else {
        setPasswordError(''); // Clear error if passwords match
       
      }
    }
    return isValid;
  };
  const checkUserExistence = async () => {
    const usersRef = collection(db, 'users');
    
    // Check for existing email
    const emailQuery = query(usersRef, where('email', '==', email));
    const emailSnapshot = await getDocs(emailQuery);
    if (!emailSnapshot.empty) {
      toast.error('Email already exists!');
      return true; // User exists
    }

    // Check for existing username
    const usernameQuery = query(usersRef, where('username', '==', username));
    const usernameSnapshot = await getDocs(usernameQuery);
    if (!usernameSnapshot.empty) {
      toast.error('Username already exists!');
      return true; // User exists
    }

    // Check for existing phone number
    const phoneQuery = query(usersRef, where('phone', '==', phone));
    const phoneSnapshot = await getDocs(phoneQuery);
    if (!phoneSnapshot.empty) {
      toast.error('Phone number already exists!');
      return true; // User exists
    }

    return false; // User does not exist
  };

  const register = async (e) => {
    e.preventDefault();
    setError('');
    // Check if passwords are valid
    if (!validatePassword()) return;

    // Check if user already exists
    const userExists = await checkUserExistence();
    if (userExists) return; // Exit if user exists

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);

      await setDoc(doc(db, 'users', res.user.uid), {
        username: username,
        email: email,
        phone: phone,
        address: address,
      });

      // Show success message and redirect
      toast.success('Registration successful! Redirecting to login...', {
        position: "top-center",
        autoClose: 2000,
        onClose: () => {
          navigate('/login');
        }
      });
    } catch (err) {
      setError(err.message);
    }

    // Clear form fields
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setUsername('');
    setPhone('');
    setAddress('');
  };
  return (
    <div className="register-page">
      <img src={logo} alt="Logo" className="logo" />
      <div className="carousel-container">
        <Carousel />
      </div>
      <div className="form-container">
        <h2 className="form-title">Register</h2>
        <form onSubmit={register}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Enter your phone number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(''); // Clear password error on input change
              }}
            />
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>} {/* Show password error */}

          <div className="form-group">
            <input
              type="password"
              placeholder="Retype your password"
              required
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordError(''); // Clear password error on input change
              }}
            />
          </div>

          <button type="submit" className="register-btn">Register</button>
        </form>
        {error && <p className="error-message">{error}</p>} {/* Show general error */}
        <p className="register-with">----------- OR -----------</p>
        <button type="submit" className="register-btn">
          <div className="google-login">
            <FontAwesomeIcon icon={faGoogle} className="google-icon" />
            <span> Register with Google</span>
          </div>
        </button>
        <p className="register-prompt">
          Already have an account?{' '}
          <Link to="/registervia" className="register-link">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Registerpage;
