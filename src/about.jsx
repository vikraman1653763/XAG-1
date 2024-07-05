import React from 'react';
import './style/about.css';
import Section1 from './about/Section1';
import SectionAbout from './about/SectionAbout';
import SectionVision from './about/SectionVision';
import SectionMission from './about/SectionMission';
import SectionTestimonials from './about/SectionTestimonials';
import SectionNews from './about/SectionNews';

function About() {
  return (
    <div>
      <Section1 />
      <SectionAbout />
      <SectionVision />
      <SectionMission />
      <SectionTestimonials />
      <SectionNews />
      
    </div>
  );
}

export default About;
