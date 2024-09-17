import React, { useEffect, useState } from 'react';

const CubeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = ['top-left', 'top-right' , 'bottom-right', 'bottom-left'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="cube-section">
      <div className={`cube-item top-left ${items[activeIndex] === 'top-left' ? 'active' : ''}`}>
        <div className='big-blocky bl1'>
          <div className="blocky">FPV Camera</div>
        </div>
      </div>

      <div className={`cube-item top-right ${items[activeIndex] === 'top-right' ? 'active' : ''}`}>
        <div className='big-blocky bl2'>
          <div className="blocky">Obstacle Sensor</div>
        </div>
      </div>

      <div className={`cube-item bottom-left ${items[activeIndex] === 'bottom-left' ? 'active' : ''}`}>
        <div className='big-blocky bl3'>
          <div className="blocky">Motor & 36inch Propeller</div>
        </div>
      </div>

      <div className={`cube-item bottom-right ${items[activeIndex] === 'bottom-right' ? 'active' : ''}`}>
        <div className='big-blocky bl4'>
          <div className="blocky">Brush Pump</div>
        </div>
      </div>
    </section>
  );
};

export default CubeSection;
