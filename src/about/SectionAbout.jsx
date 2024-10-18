import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const SectionAbout = () => {
  useEffect(()=>{
    AOS.init({
      duration: 500,
      mirror: true,
    });
  },[])

  return (
    <section className="About">
      <div className="aboutpage-container">
        <div className="aboutpage-contents">
          <div className="aboutpage-title"  >
            <h1 data-aos="fade-up" >ABOUT</h1>
            <img data-aos="fade-up"  className="aboutpage-logo" src="/assets/logo.webp" alt="logo" />
          </div>
          <p data-aos="fade-up" data-aos-delay='200'>
            We specialize in manufacturing advanced agricultural drones, providing ground control systems (GCS) services, and developing enterprising flight controllers. Our innovative technology empowers farmers to increase yields and promote sustainable agriculture. At Xagrotor Tek, we are dedicated to revolutionizing farming practices through innovation and technology. Join us in shaping the future of agriculture for a more efficient and sustainable world.
          </p>
        </div>
        <div className="aboutpage-myvideo" >
          
          <video id="myVideo" autoPlay loop>
            <source src="/assets/video.webm" type="video/mp4" />
          </video>
         
        </div>
        
      </div>
    </section>
  );
};

export default SectionAbout;
