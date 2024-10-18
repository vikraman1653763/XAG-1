import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import person from '/assets/person.webp';
import coin from '/assets/coin.webp';
import suitcase from '/assets/suitcase.webp';
import suitcase2 from '/assets/suitcase2.webp';

const Section1 = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [0.5, 1.5]);
  const y = useTransform(scrollY, [0, 500], [500, -100]);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="dealer-sec-1">
      <motion.h2
        initial={{ opacity: 0, fontSize: '2rem', color: "black", y: -100 }}
        animate={{ opacity: 1, fontSize: '3em', color: 'white', y: 100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='dealer-head'
      >
        Become Our<br /> Dealership Partner
      </motion.h2>
      <div className="semi-circle-wrapper">
        <motion.div
          className="semi-circle"
          style={{
            scale: scale,
            y: y,
          }}
        />
        <div className='dealer-img-grid' style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
          <div className='dealer-img-item deal-1' style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
            <img src={suitcase} alt='Suitcase' />
          </div>
          <div className='dealer-img-item deal-2' style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
            <img src={person} alt='Person' />
          </div>
          <div className='dealer-img-item deal-3' style={{ transform: `translateX(${offsetY * 1}px) translateY(${offsetY * 0.2}px)` }}>
            <img src={suitcase2} alt='multiCoin' />
          </div>
          {/* Additional coin images */}
          <div className='dealer-img-item deal-4' style={{ transform: `translateX(${offsetY * 0.4}px) translateY(${offsetY * 0.2}px)` }}>
            <img src={coin} alt='Coin' />
          </div>
          <div className='dealer-img-item deal-5' style={{ transform: `translateX(-${offsetY * 0.6}px) translateY(${offsetY * 0.8}px)` }}>
            <img src={coin} alt='Coin' />
          </div>
          <div className='dealer-img-item deal-6' style={{ transform: `translateX(${offsetY * .6}px) translateY(${offsetY * 0.7}px)` }}>
            <img src={coin} alt='Coin' />
          </div>
          <div className='dealer-img-item deal-7' style={{ transform: `translateX(${offsetY * 0.3}px) translateY(-${offsetY * 0.7}px)` }}>
            <img src={coin} alt='Coin' />
          </div>
          <div className='dealer-img-item deal-8' style={{ transform: `translateX(-${offsetY * 0.8}px) translateY(-${offsetY * 0.7}px)` }}>
            <img src={coin} alt='Coin' />
          </div>
          <div className='dealer-img-item deal-9' style={{ transform: `translateY(${offsetY * 0.5}px) translateY(-${offsetY * 0.7}px)` }}>
            <img src={coin} alt='Coin' />
          </div>
          <div className='dealer-img-item deal-10' style={{ transform: `translateX(-${offsetY * 0.3}px) translateY(-${offsetY * 0.7}px)` }}>
            <img src={suitcase2} alt='Coin' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
