// AGR16.jsx
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/agr16.css';
import Header from './header.jsx';
import GifContainer from './GifContainer.jsx';
import Description from './Description.jsx';
import Specifications from './Specifications.jsx';
import DroneTypes from './DroneTypes.jsx';
import Advantages from './Advantages.jsx';
import DroneTabs from './dronetab.jsx';
import CubeSection from './CubeSection.jsx';
import Fc from './fCSection.jsx';
import Section11 from '../../home/Section1.jsx';

const AGR16 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      mirror: true,
    });
  }, []);

  return (
    <div>
    
      <main> 
      
        <GifContainer />
      <Section11/>
        <Description />
        <Specifications />
        <Fc/>
        <CubeSection/>
        <DroneTypes />
      <DroneTabs />
        <Advantages />
      </main>
 
    </div>
  );
};

export default AGR16;