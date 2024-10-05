import React from 'react';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import ProductCarousel from './ProductCarousel';
import Services from './Services';

const Landingpage = () => {
  return (
    <>
      <Navbar />
      <ProductCarousel />
      <div className="content-container">
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Landingpage;
