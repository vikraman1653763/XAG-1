import React from 'react'

import '../style/dealer.css';

import Section1 from '../dealer/section1'
import Section2 from '../dealer/section2'
import Section3 from '../dealer/section3'
import Section4 from '../dealer/Section4'
function Dealer() {
  return (
    <div className='blogPageContainer'> 
      <Section1/>
      <Section2/>
      <Section4/>
      <Section3/>
    </div>
  )
}

export default Dealer
