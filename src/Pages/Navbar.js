import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom for page navigation
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll for smooth scrolling
import './Navbar.css';
import logo from './images/logo.png'; // Import the logo image

const Navbar = () => {
   const [open, setOpen] = useState(false);

   return (
     <nav className={`navbar ${open ? 'open' : ''}`}>
       <div className="logo-container">
         {/* Use the logo image */}
       
           <img src={logo} alt="Logo" className="logo11" />
      
       </div>
       <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
       <ul className={`menu ${open ? 'open' : ''}`}>
         {/* Smooth scroll to sections */}
         <li>
           <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
         </li>
         <li>
           <ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink>
         </li>
         <li>
           <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
         </li>
         <li><RouterLink to="/login">Log In</RouterLink></li>
         <li><RouterLink to="/signin">Register</RouterLink></li>
       </ul>
     </nav>
   );
};

export default Navbar;
