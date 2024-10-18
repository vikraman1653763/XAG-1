// Specifications.jsx
import React from 'react';
import weightIcon from '/assets/weight.svg';
import speedIcon from '/assets/speed.svg';
import payloadIcon from '/assets/payload.svg';
import flightIcon from '/assets/flight.svg';
import rangeIcon from '/assets/range.svg';
import cameraIcon from '/assets/camera.svg';

const Specifications = () => {
  return (
    <div className="spec-agr16-card">
      <h4>Specifications</h4>
      <div className="spec-details">
        <div className="spec-item" data-aos="fade-left">
          <img className="spec-img" src={weightIcon} alt="Weight Icon" />
          <span>Weight: 42.8 kg</span>
        </div>
        <div className="spec-item">
          <img className="spec-img" src={speedIcon} alt="Speed Icon" />
          <span>Speed: 6m/s</span>
        </div>
        <div className="spec-item" data-aos="fade-right">
          <img className="spec-img" src={payloadIcon} alt="Payload Icon" />
          <span>Payload: 15Kg</span>
        </div>
        <div className="spec-item" data-aos="fade-left">
          <img className="spec-img" src={flightIcon} alt="Flight Time Icon" />
          <span>Flight Time: 14.2 min</span>
        </div>
        <div className="spec-item">
          <img className="spec-img" src={rangeIcon} alt="Range Icon" />
          <span>Range: 1 km</span>
        </div>
        <div className="spec-item" data-aos="fade-right">
          <img className="spec-img" src={cameraIcon} alt="Camera Icon" />
          <span>Camera: MIPI-DCAM</span>
        </div>
      </div>
    </div>
  );  
};

export default Specifications;
