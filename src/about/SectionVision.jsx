import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


 
const SectionVision = () => {
  useEffect(()=>{
    AOS.init({
      duration:700,
      mirror:true,
      easing:"ease-in-out",
    });
    
  },[])

  return (
    <section className="vision">
      <div className="content-center">
        <div className="header">
          <div className="title" >
            <h2>What's Our</h2>
          </div>
          <div className="text-effect"  data-aos="fade-up">
            <h2>Vision</h2>
          </div>
        </div>
        <div className="content">
          <div className="aboutcard" data-aos="fade-up">
            <h2 data-aos="fade-up">#1</h2>
            <h3 data-aos="fade-up">“Future-Oriented </h3>
            <p data-aos="fade-up">Focusing on long-term goals and the continual improvement of agricultural methods and technologies.</p>
          </div>
          <div className="aboutcard" data-aos="fade-up">
            <h2 data-aos="fade-up">#2</h2>
            <h3 data-aos="fade-up">“Sustainability</h3>
            <p data-aos="fade-up">Committing to sustainable farming practices that benefit both the environment and the agricultural industry.</p>
          </div>
          <div className="aboutcard" data-aos="fade-up">
            <h2  data-aos="fade-up">#3</h2>
            <h3 data-aos="fade-up">“Integration </h3>
            <p data-aos="fade-up">Creating a seamless blend of modern technology with traditional farming techniques to maximize outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionVision;
