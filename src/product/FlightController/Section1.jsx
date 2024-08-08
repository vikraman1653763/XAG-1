import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Section1 = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const containerRef1 = useRef(null);
    const containerRef2 = useRef(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    } else {
                        entry.target.classList.remove('in-view');
                    }
                });
            },
            { threshold: 0.1 } // Adjust this threshold as needed
        );

        if (containerRef1.current) {
            observer.observe(containerRef1.current);
        }
        if (containerRef2.current) {
            observer.observe(containerRef2.current);
        }

        return () => {
            if (containerRef1.current) {
                observer.unobserve(containerRef1.current);
            }
            if (containerRef2.current) {
                observer.unobserve(containerRef2.current);
            }
        };
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <section className='controller' data-aos="fade-up">
            <h2 className='contoller-title'>Xrotor Tek India</h2>
            <p>The Xrotor Tek India Flight Controller is a state-of-the-art control system designed for precision agriculture. It offers unparalleled stability, reliability, and efficiency, making it the perfect choice for modern agricultural drones.</p>
            
            <div ref={containerRef1} className={`flight-controller-container ${scrollDirection === 'down' ? 'translate-right' : scrollDirection === 'up' ? 'translate-left' : ''}`}>
                <div className="images-container">
                    <img src="/fc/1.webp" alt="Flight Controller Image 1" className="flight-controller-image" />
                    <img src="/fc/2.webp" alt="Flight Controller Image 1" className="flight-controller-image" />
                    <img src="/fc/3.webp" alt="Flight Controller Image 1" className="flight-controller-image" />
                    <img src="/fc/4.webp" alt="Flight Controller Image 1" className="flight-controller-image" />
                </div>
            </div>   
            <div ref={containerRef1} className={`flight-controller-container ${scrollDirection === 'down' ? 'translate-left' : scrollDirection === 'up' ? 'translate-right' : ''}`}>
                <div className="images-container">
                    <img src="/fc/3.webp" alt="Flight Controller Image 1" className="flight-controller-image" />
                    <img src="/fc/4.webp" alt="Flight Controller Image 1" className="flight-controller-image" />
                    <img src="/fc/1.webp" alt="Flight Controller Image 1" className="flight-controller-image" />
                    <img src="/fc/2.webp" alt="Flight Controller Image 1" className="flight-controller-image" />
                </div>
            </div>

            

        </section>
    );
};

export default Section1;
