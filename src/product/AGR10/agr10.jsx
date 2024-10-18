// AGR16.jsx
import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/agr16.css';
=======
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/agr16.css';
import Header from './header.jsx';
import GifContainer from './GifContainer.jsx';
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
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
<<<<<<< HEAD
=======
        <GifContainer />
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
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