// GifContainer.jsx
import React from 'react';
import MotionWrapper from '../../components/MotionWrapper';
import drone001 from "/assets/drone001.webp";

const GifContainer = () => {
  return (
    <>
      <h2 className='Model'>AGR<span>16</span></h2>
    <section className="gif-container">
      <MotionWrapper>
      </MotionWrapper>
      <img src={drone001} alt="Main Product" />
    </section>
    </>
  );
};

export default GifContainer;
