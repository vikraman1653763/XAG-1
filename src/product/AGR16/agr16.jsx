// AGR16.jsx
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/agr16.css';
import Header from './header';
import GifContainer from './GifContainer';
import Description from './Description';
import Specifications from './Specifications';
import DroneTypes from './DroneTypes';
import Advantages from './Advantages';
import DroneTabs from './dronetab';
import CubeSection from './CubeSection';


const AGR16 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      mirror: true,
    });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <GifContainer />
        <Description />
        <Specifications />
        <CubeSection/>
        <DroneTypes />
      <DroneTabs />
        <Advantages />
 
      </main>
 
    </div>
  );
};

export default AGR16;