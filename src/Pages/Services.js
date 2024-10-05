import React from 'react';
import './Services.css'; // Import the corresponding CSS file
import customizationImage from './images/customization.jpeg'; // Example image for Card 3
import giftImage from './images/gift1.jpeg'; // Example image for Card 1
import prototypeImage from './images/prototype.jpeg'; // Example image for Card 2

const Services = () => {
  return (
    <div>
        <h1 className="neon-title">Services</h1>
    <div className="services-container">
      <div className="service-card card1">
        <img className="card-image" src={giftImage} alt="Customized Gifts" />
        <h2>Customized Gifts</h2>
        <p>
          We offer an extensive range of bespoke 3D-printed gift items, meticulously designed to suit a variety of occasions. 
          Whether you are seeking a unique gift for a special event or a memorable corporate giveaway, 
          our customizable options ensure that each product is tailored to your specific requirements and preferences.
        </p>
      </div>
      <div className="service-card card2">
      <img className="card-image bottom-image" src={prototypeImage} alt="Engineering Prototypes" />
        <h2>Engineering Prototypes</h2>
        <p>
          Our specialized 3D printing services cater to the engineering and manufacturing sectors, 
          providing high-quality prototypes that replicate precise specifications. 
          With state-of-the-art printing technology, we ensure that each prototype is engineered for accuracy, 
          functionality, and durability, supporting the design and testing phases of your projects.
        </p>
        
      </div>
      <div className="service-card card3">
        <img className="card-image" src={customizationImage} alt="Product Customization" />
        <h2>Product Customization</h2>
        <p>
          3dSmith offers comprehensive customization services, allowing clients to modify and fine-tune their designs before production. 
          This ensures that the final product is perfectly aligned with your vision, providing a seamless experience from concept to creation.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Services;
