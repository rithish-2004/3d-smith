import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
   const [open, setOpen] = useState(false);

   return (
     <nav className={`navbar ${open ? 'open' : ''}`}>
       <h1 className="logo">My Logo</h1>
       <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
       <ul className={`menu ${open ? 'open' : ''}`}>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/services">Services</Link></li>
         <li><Link to="/contact">Contact</Link></li>
         <li><Link to="/Login">Log In</Link></li>
         <li><Link to="/sign in">Sign In</Link></li>

       </ul>
     </nav>
   );
};

export default Navbar;