import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Section2 = () => {
    useEffect(() => {
        AOS.init({
            duration: 2500,
            easing: 'cubic-bezier(0.09, 1.88, 0, -2)',
           
        });
    }, []);

    return (
       <>
            <div className="description" data-aos="fade-up">
                <h2 >Features</h2>
                <ul>
                    <li data-aos="fade-left">Cloud Data Log</li>
                    <li data-aos="fade-right">Server Support</li>
                    <li data-aos="fade-left">Live Monitoring</li>
                    <li data-aos="fade-right">APK Customization</li>
                    <li data-aos="fade-left">Regional Language</li>
                    <li data-aos="fade-right">High precision GPS</li>
                    <li data-aos="fade-left">Customizable flight paths</li>
                    <li data-aos="fade-right">Enhanced safety protocols</li>
                    <li data-aos="fade-left">Real-time video recording</li>
                    <li data-aos="fade-right">Point-to-point tree spraying</li>
                </ul>
            </div>
       </>
    );
};

export default Section2;
