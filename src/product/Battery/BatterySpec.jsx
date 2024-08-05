import React, { useEffect, useRef, useState } from 'react';
import batterysvg from '/assets/battsvg.svg';
const data1 = [
  "Ensuring optimal performance",
  "Unique BMS supports",
  "Wide working temperature range",
  "extended usage periods",
  "Safe and reliable operation",
  "Smart charging capabilities",
];

const data2 = [
  "Long battery life",
  "long endurance with reliability.",
  "efficient energy management",
  "Suitable for heavy Load",
  "High and stable discharge rate",
  "Additional safety features",
];

// Function to duplicate data points
const duplicateData = (data, count) => {
  let result = [];
  for (let i = 0; i < count; i++) {
    result = result.concat(data);
  }
  return result;
};

function BatterySpec() {
  const [offsetY, setOffsetY] = useState(0);
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (inView) {
      setOffsetY(window.scrollY);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.2
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView]);


  const duplicatedData1 = duplicateData(data1, 4); 
  const duplicatedData2 = duplicateData(data2, 3);

  return (
    <section className="battery-spec-container">
       <h2 className='battery-spec-title'>Advanced Battery</h2>
       <img src={batterysvg} className='battery-spec-image'/>
       <h2 className='battery-spec-title t2 '>Features</h2>
       <div className='battery-spec-box' ref={containerRef}>
        <section className='battery-points btpt1'>
          {duplicatedData1.map((pt, index) => (
            <p
              key={index}
              style={{
                transform: `translateY(${offsetY * 0.5}px)`,
                transition: 'transform 0.2s ease-out'
              }}
            >
              {pt}
            </p>
          ))}
        </section>
        <section className='battery-points'>
          {duplicatedData2.map((pt, index) => (
            <p
              key={index}
              style={{
                transform: `translateY(-${offsetY * 0.5}px)`,
                transition: 'transform 0.2s ease-out'
              }}
            >
              {pt}
            </p>
          ))}
        </section>
      </div>
    </section>
  );
}

export default BatterySpec;
