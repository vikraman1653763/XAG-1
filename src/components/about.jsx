import React from 'react';
import '../style/about.css';

import Section1 from '../about/Section1';
import SectionAbout from '../about/SectionAbout';
import SectionVision from '../about/SectionVision';
import SectionMission from '../about/SectionMission';
import SectionNews from '../about/SectionNews';
import Section6 from '../home/Section6';
import SectionFAQ from '../about/SectionFAQ';

function About() {
  return (
    <div>
      <Section1 />
      <SectionAbout />
      <SectionVision />
      <SectionMission />
      <Section6/>
      <SectionFAQ/>
      <SectionNews />
      
    </div>
  );
}

export default About;
