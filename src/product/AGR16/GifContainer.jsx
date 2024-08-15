// GifContainer.jsx
import React from 'react';
import MotionWrapper from '../../components/MotionWrapper';
import drone001 from "/product/product1.webp";

const GifContainer = () => {
  return (
    <>
  
    <section className="gif-container">
      <MotionWrapper>
      </MotionWrapper>
      <img src={drone001} alt="Main Product" />
    </section>
    </>
  );
};

export default GifContainer;
