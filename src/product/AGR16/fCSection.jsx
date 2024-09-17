import React, { useEffect, useRef, useState } from 'react';
import gnss from '/fc/gnss.webp';
import fmu from '/fc/fmu.webp';
import pmu from '/fc/pmu.webp';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MotionWrapper from '../../components/MotionWrapper';

const Fc = () => {


  useEffect(() => {
    AOS.init();
  
  }, []);



  return (
    <div className="fc-sec-card">
      <div className="fc-sec-card-content">
        <h3>Flight Controller</h3>
        <p className="fc-intro">
          Experience the pinnacle of drone technology with our state-of-the-art Flight Controller. Designed for precision, stability, and efficiency, our FC ensures your drone performs optimally in every mission. Whether it's for agricultural spraying, surveying, or mapping, trust our FC to deliver unparalleled performance.
        </p>
        <ul>
          <li>
            <strong >GNSS</strong> <span><MotionWrapper> Ensures precise positioning and navigation, enhancing the drone's stability and accuracy. </MotionWrapper></span>
          </li>
          <li>
            <strong>PMU</strong> <span> <MotionWrapper> Manages the power distribution, ensuring efficient and reliable operation of the drone's systems. </MotionWrapper></span>
          </li>
          <li>
            <strong>FMU  </strong> <span> <MotionWrapper> Provides overall control and stability, coordinating the drone's various systems for optimal performance. </MotionWrapper></span>
          </li>
        </ul>
        <div className="fc-link-btn" data-aos="fade-up">
          <Link  to="/flight-controller">Learn&nbsp;more</Link>
        </div>
      </div>
      <div
        className="fc-sec-parallex" data-aos='fade-left'>
        <div className="fc-gnss">
          <img src={gnss} className="fc-sec-img" alt="GNSS Module" />
        </div>
        <div className="fc-fmu">
          <img src={fmu} className="fc-sec-img" alt="FMU Module" />
        </div>
        <div className="fc-pmu">
          <img src={pmu} className="fc-sec-img" alt="PMU Module" />
        </div>
      </div>
    </div>
  );
};

export default Fc;
