import React, { useEffect, useRef } from 'react';
import SplitTextJS from 'split-text-js';
import gsap from 'gsap';

const Section2 = () => {
  const containerRef = useRef(null); 

  useEffect(() => {
    if (containerRef.current) {
      const titles = gsap.utils.toArray(containerRef.current.querySelectorAll('p'));
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      titles.forEach(title => {
        const splitTitle = new SplitTextJS(title, { type: 'chars, words, lines' });
        tl
          .from(splitTitle.chars, {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.001
          }, '<')
          .to(splitTitle.chars, {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: 0.001
          }, '<2');
      });
    }
  }, []);  

  return (
    <>
    <div ref={containerRef} className='des-container'> 
        <h2 className='des-head'>Feature</h2>
      <div className='des-text-wrapper'>
        <p>Cloud Data Log</p>
        <p>Server Support</p>
        <p>Live Monitoring</p>
        <p>APK Customization</p>
        <p>Regional Language</p>
        <p>High precision GPS</p>
        <p>Customizable flight paths</p>
        <p>Enhanced safety protocols</p>
        <p>Real-time video recording</p>
        <p>Point-to-point tree spraying</p>
      </div>
    </div>
    </>
  );
};

export default Section2;
