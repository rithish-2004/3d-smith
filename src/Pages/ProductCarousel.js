import React, { useEffect, useState } from 'react';
import './ProductCarousel.css';
import d1 from './images/3d1.jpg';
import case2 from './images/case2.jpg';
import cases from './images/cases.jpg';
import gift from './images/gift.jpg';
import image3 from './images/image3.jpg';
import keychain from './images/keychain.jpg';
import shoes from './images/shoes.jpg';
import teddy from './images/teddy.jpeg';
const products = [
  { id: 1, name: "TEDDY", image: teddy },
  { id: 2, name: "SHOWCASE PRODUCtS", image:image3 },
  { id: 3, name: "PHONE CASE PRODUCTS", image: cases },
  { id: 4, name: "PHONE CASE PRODUCTS", image:case2 },
  { id: 5, name: "SHOES", image: shoes },
  { id: 6, name: "DESIGN", image: d1 },
  { id: 7, name: "KEYCHAIN", image: keychain },
  { id: 8, name: "GIFt PRODUCT", image: gift },
];

const ProductCarousel = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle + 1); // Adjust the increment for speed
    }, 100); // Adjust the interval for how fast the rotation occurs

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
     <h1 className="neon-title">Welcome</h1>
    <div id="carousel">
      <figure id="spinner" style={{ transform: `rotateY(${angle}deg)` }}>
        {products.map((product) => (
          <img key={product.id} src={product.image} alt={product.name} />
        ))}
      </figure>
    </div>
  
    <h1 className="neon-title">Innovate, Create, Inspire: Transforming Ideas into Reality with 3D Printing.</h1>
    </div>
  );
};

export default ProductCarousel;
