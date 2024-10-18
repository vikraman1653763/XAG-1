// DroneTypes.jsx
import React from 'react';
import MotionWrapper from '../../components/MotionWrapper';
<<<<<<< HEAD
import sprayImage from '/assets/spray.webp';
import seederImage from '/assets/seeder.webp';
=======
import sprayImage from '/assets/spray.jpg';
import seederImage from '/assets/seeder.png';
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579

const DroneTypes = () => {
  return (
    <section data-aos="fade-up">
      <MotionWrapper>
        <h4 className='agr16-type'><span>Drone </span>Types</h4>
      </MotionWrapper>
      <div className="agr16-card-container">
        <div className="agr16-card">
          <img src={sprayImage} alt="Sprayer Drone" className="agr16-card-img" />
          <div className="agr16-card-content">
            <h5 className="type-name">Sprayer Drone</h5>
            <p>This drone is designed for efficient and precise spraying of crops, ensuring optimal coverage and minimal waste.</p>
          </div>
        </div>
        <div className="agr16-card">
          <img src={seederImage} alt="Spreader Drone" className="agr16-card-img" />
          <div className="agr16-card-content">
            <h5 className="type-name">Spreader Drone</h5>
            <p>This drone is perfect for spreading seeds, fertilizers, and other granular materials across large fields quickly and evenly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DroneTypes;
