import React, { useEffect, useState } from 'react';
import sample1 from './Loginimages/sample1.jpeg';
import sample10 from './Loginimages/sample10.jpg';
import sample2 from './Loginimages/sample2.jpeg';
import sample3 from './Loginimages/sample3.jpg';
import sample4 from './Loginimages/sample4.jpeg';
import sample5 from './Loginimages/sample5.jpg';
import sample6 from './Loginimages/sample6.jpg';
import sample7 from './Loginimages/sample7.jpg';
import sample8 from './Loginimages/sample8.jpg';
import sample9 from './Loginimages/sample9.jpg';
import './Photocarousel.css';
const images = [
  sample1,
  sample2,
  sample3,
  sample4,
  sample5,
  sample6,
  sample7,
  sample8,
  sample9,
  sample10,
 
];

const PhotoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="photo-carousel">
      {images.map((src, index) => (
        <div
          key={index}
          className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
        >
          <img src={src} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default PhotoCarousel;
