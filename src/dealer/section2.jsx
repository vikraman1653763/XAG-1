import React, { useEffect, useRef } from 'react';
import SplitTextJS from 'split-text-js';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section2() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      mirror: true,
      easing: "ease-in-out-back"
    });
  }, []);

  // Array of dealership benefits
  const dealershipBenefits = [
    { title: "Innovative Products", description: "Gain access to a diverse range of state-of-the-art products designed to meet the needs of today’s market." },
    { title: "Competitive Margins", description: "Enjoy attractive margins and profit opportunities with our dealership program." },
    { title: "Marketing Support", description: "Benefit from our comprehensive marketing resources and strategies to help you succeed." },
    { title: "Extensive Training ", description: "We provide extensive training to ensure that you and your team are well-equipped to represent our brand." },
    { title: "Global Recognition", description: "Be a part of a globally recognized brand with a reputation for quality and innovation." },
  ];
  
  

  return (
    <div className='dealer-sec-2'>
      <h2 className='dealer-sec-2-h3'>Why Partner with <strong > Xagrotor Tek ?</strong></h2>
      
      <div className="content-wrapper" >
        <ul className='dealer-ul'>
        {dealershipBenefits.map((benefit, index) => (
  <li key={index} className='dealer-why'>
    <h3>
      <span>{benefit.title.split(' ')[0]}</span>
      <span>{benefit.title.split(' ')[1]}</span>
    </h3>
    <h5 data-aos="fade-down">{benefit.description}</h5>
  </li>
))}

        </ul>
      </div>
    </div>
  );
}

export default Section2;
