import React from 'react';
import './About.css';
import aboutus from './images/aboutus.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img 
          src={aboutus} 
          alt="3D Printing Service" 
        />
      </div>
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          At 3dSmith, we are committed to harnessing the power of advanced 3D printing technology 
          to transform your ideas into reality. Specializing in tailored solutions, we offer a wide 
          range of services, from personalized 3D-printed gifts to high-precision engineering prototypes. 
          Our focus is on delivering exceptional quality and customization to meet the unique needs of each client. 
          Whether for personal, creative projects or industrial applications, 3dSmith is dedicated to providing 
          innovative and reliable 3D printing services that exceed expectations.
        </p>
      </div>
    </div>
  );
};

export default About;
