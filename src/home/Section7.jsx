import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Section7 = () => {
    useEffect(()=>{
        Aos.init({
            duration:500,
            mirror:true,
            easing:"ease-in-out-back",
            delay:700

        })
    },[])
 
    return (
        <section id="sec-7"  >
            <h3 data-aos="fade-up">CERTIFI<span>CATE</span></h3>
            <div className="showcase-container">
                <div className="showcase-set">
                    <div className="image"  data-aos="fade-left">
                        <img className="certificate" src="/assets/certificate1.webp" alt="ISO 9000:2015" />
                        <span data-aos="fade-down">ISO 9000:2015</span>
                    </div>
                    <div className="image" data-aos="fade-right">
                        <img className="certificate" src="/assets/certificate2.webp" alt="ISO 14001:2015" />
                        <span data-aos="fade-down">ISO 14001:2015</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section7;
