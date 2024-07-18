import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const SectionAbout = () => {
  useEffect(()=>{
    AOS.init({
      duration: 500,
      mirror: true,
      easing:"ease-in-out-back"
    });
  },[])

  return (
    <section className="About">
      <div className="aboutpage-container">
        <div className="aboutpage-contents">
          <div className="aboutpage-title" data-aos="slide-left"  >
            <h2 data-aos="slide-right" data-aos-delay='100' >ABOUT</h2>
            <img className="aboutpage-logo" src="/assets/logo.webp" alt="logo" />
          </div>
          <p data-aos="slide-right">
            We specialize in manufacturing advanced agricultural drones, providing ground control systems (GCS) services, and developing enterprising flight controllers. Our innovative technology empowers farmers to increase yields and promote sustainable agriculture. At Xagrotor Tek, we are dedicated to revolutionizing farming practices through innovation and technology. Join us in shaping the future of agriculture for a more efficient and sustainable world.
          </p>
        </div>
        <div className="aboutpage-myvideo" >
          <video id="myVideo" autoPlay loop>
            <source src="/assets/video.webm" type="video/mp4" />
          </video>
          <div className="play-button" id="trigger">
            <div className="icon-bg">
              <img src='/assets/Play.svg' alt="Play Icon" />
            </div>
            <div className="duration">
              <p>Quick explainer</p>
              <time>00:13 mins</time>
            </div>
          </div>
        </div>
        <div className="aboutpage-modal" id="modal">
          <div className="aboutpage-modal-content">
            <span className="close-button" id="close-btn"><i className="fa-solid fa-xmark fa-xl"></i></span>
            <video controls>
              <source src="/assets/video.mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
