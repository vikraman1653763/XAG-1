import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { delay } from 'framer-motion';


const SectionMission = () => {


  useEffect(()=>{
    AOS.init({
      duration: 500,
      mirror: true,
      easing:"ease-in-out-back"
    });
  },[])
  return (
    <section className="mission">
      <div className="head">
        <h2 className="heading">What's Our</h2>
        <div className="misson-texteffect">
          <h2 data-aos="fade-down">MISSION</h2>
        </div>
      </div>
      <div className="content">
        <div data-aos="fade-down" className="card">
          <h2 data-aos="fade-down">#1</h2>
          <h3 data-aos="fade-down">“Empowerment of Farmers</h3>
          <p data-aos="fade-down">Providing farmers with the tools and knowledge needed to optimize their crop management.</p>
        </div>
        <div data-aos="fade-down" className="card">
          <h2 data-aos="fade-down">#2</h2>
          <h3 data-aos="fade-down">“Precision Farming</h3>
          <p data-aos="fade-down">Promoting techniques that use resources more efficiently and effectively, leading to better crop yields and reduced waste.</p>
        </div>
        <div data-aos="fade-down" className="card">
          <h2 data-aos="fade-down">#3</h2>
          <h3 data-aos="fade-down">“Customer Support</h3>
          <p data-aos="fade-down">Delivering exceptional support to help farmers utilize new technologies effectively and to their fullest potential.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionMission;
