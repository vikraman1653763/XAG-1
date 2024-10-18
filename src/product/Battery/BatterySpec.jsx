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

function RenderForMobile() {
  return (
    <section className="battery-spec-container">
      <h2 className='battery-spec-title'>Advanced Battery Features</h2>
      <img src={batterysvg} className='battery-spec-image'/>
     
      <div className='battery-spec-box'>
        <section className='battery-points'>
          {data1.map((pt, index) => <p key={index}>{pt}</p>)}
        </section>
        <section className='battery-points'>
          {data2.map((pt, index) => <p key={index}>{pt}</p>)}
        </section>
      </div>
    </section>
  );
}

function BatterySpec() {
  const [offsetY, setOffsetY] = useState(0);
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (inView && window.innerWidth >= 768) {
      setOffsetY(window.scrollY);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { root: null, threshold: 0.2 }
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView]);

  const duplicatedData1 = data1.flatMap(d => Array(4).fill(d)); // Efficiently duplicate data inline
  const duplicatedData2 = data2.flatMap(d => Array(3).fill(d));

  if (window.innerWidth < 768) {
    return <RenderForMobile />;
  }

  return (
    <section className="battery-spec-container">
      <h2 className='battery-spec-title'>Advanced Battery</h2>
      <img src={batterysvg} className='battery-spec-image'/>
      <h2 className='battery-spec-title t2'>Features</h2>
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
        <section className='battery-points btpt2'>
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
