import React, { useState,useEffect  } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Section3 = () => {
  const [activePart, setActivePart] = useState(null);

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

  useEffect(() => {
    AOS.init({ duration: 1500 });
}, []);

  return (
    <div className='parts-section' data-aos="fade-up">
      <div className="parts-card">
        <div className="parts-background"></div>
        <div className="parts-logo">
          <img src='assets/logoxx.svg' alt="Logo" />
        </div>
        <div 
          className="parts-box parts-box1" 
          onMouseEnter={() => setActivePart('fmu')} 
          onMouseLeave={() => setActivePart(null)}
        >
          <span className="parts-icon">
          
          </span>
        </div>
        <div 
          className="parts-box parts-box2" 
          onMouseEnter={() => setActivePart('pmu')} 
          onMouseLeave={() => setActivePart(null)}
        >
          <span className="parts-icon">
            
          </span>
        </div>
        <div 
          className="parts-box parts-box3" 
          onMouseEnter={() => setActivePart('gnss')} 
          onMouseLeave={() => setActivePart(null)}
        >
          <span className="parts-icon">
            
          </span>
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
