// AGR16.jsx
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/agr16.css';
import Description from './Description.jsx';
import Specifications from './Specifications.jsx';
import DroneTypes from './DroneTypes.jsx';
import Advantages from '../AGR16/Advantages';
import DroneTabs from './dronetab.jsx';
import CubeSection from '../AGR16/CubeSection';
import Fc from '../AGR16/fCSection.jsx';
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