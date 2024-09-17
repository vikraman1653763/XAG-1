import React from 'react';
import '../style/about.css';

import Section1 from '../about/Section1';
import SectionAbout from '../about/SectionAbout';
import SectionVision from '../about/SectionVision';
import SectionMission from '../about/SectionMission';
import Section6 from '../home/Section6';
import SectionFAQ from '../about/SectionFAQ';
import SectionCore from '../about/SectionCore';
function About() {
  return (
    <div>
      <Section1 />
      <SectionAbout />
      <SectionVision />
      <SectionMission />
      <SectionCore/>
      <Section6/>
      <SectionFAQ/>
    </div>
  );
}

export default About;
