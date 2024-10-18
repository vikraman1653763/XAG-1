import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======

>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
const Section9 = () => {
    useEffect(() => {
        AOS.init({
          duration: 500,
          mirror: true,
        });
      }, []);
    return (
        <section id="sec-8">
            <div className="content_sec">
                <div className="left">
                    <h3>GET IN <span>TOUCH!</span></h3>
                    <p>Feel free to contact us! Whether you have questions about our products, need support, or want to learn more about our latest deals, our team is here to help.</p>
<<<<<<< HEAD
                   
                        <Link to='/contact' >
                        GET A QUOTE</Link>
=======
                    <button>GET A QUOTE</button>
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
                </div>
                <div className="right">
                    <img data-aos="fade-left" src="/assets/drone.webp" alt="drone" />
                </div>
            </div>
        </section>
    );
};

export default Section9;
