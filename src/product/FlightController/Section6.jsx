import React, { useEffect, useRef } from 'react';
import SplitTextJS from 'split-text-js';
import gsap from 'gsap';

const Section6 = () => {
  const containerRef = useRef(null); 

  useEffect(() => {
    if (containerRef.current) {
      const titles = gsap.utils.toArray(containerRef.current.querySelectorAll('p'));
      const tl = gsap.timeline({ repeat: -1 });

      titles.forEach(title => {
        const splitTitle = new SplitTextJS(title, { type: 'chars, words, lines' });
        tl
          .from(splitTitle.chars, {
            opacity: 0,
            x: 100,
            rotateY: -90,
            stagger: 0.002
          }, '<')
          .to(splitTitle.chars, {
            opacity: 0,
            x: -100,
            rotateY: 90,  
            stagger: 0.002
          }, '+=3');
      });
    }
  }, []);  

  return (
    <div className='fc-adv'>
      
    <div className="fc-adv-card">
      <div className='fc-adv-img-container'>
        <img className='fc-adv-img fc1' src="/fc/fmu.webp" alt="Flight Controller Image 1" />
        <img className='fc-adv-img fc2' src="/fc/gnss.webp" alt="Flight Controller Image 1" />
        <img className='fc-adv-img fc3' src="/fc/pmu.webp" alt="Flight Controller Image 1" />
      </div>


      <div ref={containerRef}  className="fc-adv-textBox">
        <h2 className="fc-adv-t ext fc-adv-head">Key Capabilities of Our Flight Controller</h2>
        <p>The flight controller can handle up to 100kg.</p>
        <p>Can support more than 8 regional languages.</p>
        <p>log data are stored in the cloud.</p>
      </div>
    </div>
    </div>
  );
};

export default Section6;
