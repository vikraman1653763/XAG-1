import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const SectionMission = () => {


  useEffect(()=>{
    AOS.init({
      duration:700,
      mirror:true,
      easing:"ease-in-out",
    });
    
  },[])
  return (
    <section className="mission">
      <div className="head">
        <h2 className="heading">What's Our</h2>
        <div className="misson-texteffect">
          <h2 data-aos="fade-up">MISSION</h2>
        </div>
      </div>
      <div className="content">
        <div data-aos="fade-up" className="mission-card">
          <h2 data-aos="fade-up">#1</h2>
          <h3 data-aos="fade-up">“Empowerment of Farmers</h3>
          <p data-aos="fade-up">Providing farmers with the tools and knowledge needed to optimize their crop management.</p>
        </div>
        <div data-aos="fade-up" className="mission-card">
          <h2 data-aos="fade-up">#2</h2>
          <h3 data-aos="fade-up">“Precision Farming</h3>
          <p data-aos="fade-up">Promoting techniques that use resources more efficiently and effectively, leading to better crop yields and reduced waste.</p>
        </div>
        <div data-aos="fade-up" className="mission-card">
          <h2 data-aos="fade-up">#3</h2>
          <h3 data-aos="fade-up">“Customer Support</h3>
          <p data-aos="fade-up">Delivering exceptional support to help farmers utilize new technologies effectively and to their fullest potential.</p>
        </div>
      </div>
      
    </section>
  );
};

export default SectionMission;
