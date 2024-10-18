import React from 'react';
import '../style/home.css';
import Section0 from '../home/Section0';
import Section2 from '../home/Section2';
import Section3 from '../home/Section3';
import Section4 from '../home/Section4';

import Section6 from '../home/Section6';
import Section7 from '../home/Section7';
import Section9 from '../home/Section8';

function Home() {
  return (
    <div className='Home-page'>
    <Section0/>
      <Section2/>

      <Section3/>
      <Section4/>

      <Section6/>
      <Section7/>
      <Section9/>
     
    </div>
  );
}

export default Home;
