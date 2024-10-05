import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css';
import logo from './images/logo.png'; // Import the logo image

const Navbar = () => {
   const [open, setOpen] = useState(false);

   return (
     <nav className={`navbar ${open ? 'open' : ''}`}>
       <div className="logo-container">
         {/* Use the logo image */}
         <a href="#">
           <img src={logo} alt="Logo" className="logo" />
         </a>
       </div>
       <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
       <ul className={`menu ${open ? 'open' : ''}`}>
         {/* Smooth scroll to sections */}
         <li>
           <Link to="about" smooth={true} duration={500}>About</Link>
         </li>
         <li>
           <Link to="services" smooth={true} duration={500}>Services</Link>
         </li>
         <li>
           <Link to="contact" smooth={true} duration={500}>Contact</Link>
         </li>
         <li><a href="/login">Log In</a></li>
         <li><a href="/signin">Sign In</a></li>
       </ul>
     </nav>
   );
};

export default Navbar;
