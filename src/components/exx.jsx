import React, { useEffect, useRef } from 'react';
import './exxx.css';

function Exx() {
  const section3Ref = useRef(null);
  const card1Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section3 = section3Ref.current;
      const card1 = card1Ref.current;
      const card3 = card3Ref.current;
      
      if (!section3 || !card1 || !card3) return;

      const rect1 = card1.getBoundingClientRect();
      const rect3 = card3.getBoundingClientRect();

      // Check if Card 1 is visible and Card 3 is not fully visible
      if (rect1.top <= 0 && rect3.bottom > window.innerHeight) {
        // Enable scroll snapping within section3
        section3.classList.add('active');
      } else {
        // Disable scroll snapping when out of the card range
        section3.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="section" id="section-1">
        <h2>Section 1</h2>
        <p>Content of Section 1</p>
      </div>

      <div className="section" id="section-2">
        <h2>Section 2</h2>
        <p>Content of Section 2</p>
      </div>

      <div className="scroll-snap-section" id="section-3" ref={section3Ref}>
        <div className="card" ref={card1Ref}>Card 1</div>
        <div className="card">Card 2</div>
        <div className="card" ref={card3Ref}>Card 3</div>
        {/* Add more cards as needed */}
      </div>

      <div className="section" id="section-4">
        <h2>Section 4</h2>
        <p>Content of Section 4</p>
      </div>
    </div>
  );
}

export default Exx;
