import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Section3 = () => {
  const [activePart, setActivePart] = useState(null);
  const intervalRef = useRef(null);

  const partDetails = {
    fmu: {
      title: 'Flight Management Unit (FMU)',
      description: 'The FMU is the core of the drone\'s navigation system, providing precise control and stability for efficient and accurate agricultural operations.',
    },
    pmu: {
      title: 'Power Management Unit (PMU)',
      description: 'The PMU ensures a stable and reliable power supply to the drone\'s systems, enhancing performance and extending the lifespan of the components.',
    },
    gnss: {
      title: 'Global Navigation Satellite System (GNSS)',
      description: 'The GNSS offers high-precision positioning and navigation capabilities, crucial for accurate field mapping and automated drone missions.',
    },
  };

  const partKeys = Object.keys(partDetails);
  let partIndex = 0;

  useEffect(() => {
    AOS.init({ duration: 1500 });

    intervalRef.current = setInterval(() => {
      setActivePart(partKeys[partIndex]);
      partIndex = (partIndex + 1) % partKeys.length;
    }, 3000); // Change part every 3 seconds

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseEnter = (part) => {
    clearInterval(intervalRef.current);
    setActivePart(part);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setActivePart(partKeys[partIndex]);
      partIndex = (partIndex + 1) % partKeys.length;
    }, 3000); // Restart the interval
  };

  return (
    <div className='parts-section' data-aos="fade-up">
      <div className="parts-card">
        <div className="parts-background"></div>
        <div className="parts-logo">
          <img src='assets/logoxx.svg' alt="Logo" />
        </div>
        <div 
          className={`parts-box parts-box1 ${activePart === 'fmu' ? 'active' : ''}`} 
          onMouseEnter={() => handleMouseEnter('fmu')} 
          onMouseLeave={handleMouseLeave}
        >
          <span className="parts-icon"></span>
        </div>
        <div 
          className={`parts-box parts-box2 ${activePart === 'pmu' ? 'active' : ''}`} 
          onMouseEnter={() => handleMouseEnter('pmu')} 
          onMouseLeave={handleMouseLeave}
        >
          <span className="parts-icon"></span>
        </div>
        <div 
          className={`parts-box parts-box3 ${activePart === 'gnss' ? 'active' : ''}`} 
          onMouseEnter={() => handleMouseEnter('gnss')} 
          onMouseLeave={handleMouseLeave}
        >
          <span className="parts-icon"></span>
        </div>
      </div>
      <div className={`parts-details ${activePart ? 'active' : ''}`}>
        {activePart && (
          <div className='parts-details-content'>
            <h2>{partDetails[activePart].title}</h2>
            <p>{partDetails[activePart].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section3;
