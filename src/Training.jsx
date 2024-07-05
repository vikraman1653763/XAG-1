import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './style/Training.css';
import FlipCard from './training/flipcard';
import clock from "/assets/time.svg";
import topic from "/assets/topi.svg";
import weight from "/assets/weight.svg";
import { increaseNumberAnimation } from './components/increment.js';
import { useInView } from 'react-intersection-observer';

const Training = () => {
    const { ref: sevenDaysRef, inView: sevenDaysInView } = useInView({ triggerOnce: true });
    const { ref: tenDaysRef, inView: tenDaysInView } = useInView({ triggerOnce: true });

    useEffect(() => {
        AOS.init({
            duration: 1250,
            easing: 'ease-in-out',
        });
    }, []);

    useEffect(() => {
        const totalAnimationDuration = 3000; // Total duration for the number animation
        if (sevenDaysInView) {
            increaseNumberAnimation("7days-duration", 7, totalAnimationDuration);
            increaseNumberAnimation("7days-topic", 30, totalAnimationDuration);
            increaseNumberAnimation("7days-kg", 10, totalAnimationDuration);
        }
    }, [sevenDaysInView]);

    useEffect(() => {
        const totalAnimationDuration = 3000; // Total duration for the number animation
        if (tenDaysInView) {
            increaseNumberAnimation("10days-duration", 10, totalAnimationDuration);
            increaseNumberAnimation("10days-topic", 65, totalAnimationDuration);
            increaseNumberAnimation("10days-kg", 16, totalAnimationDuration);
        }
    }, [tenDaysInView]);

    const courses = [
        { id: "7days", title: "Small Category (7 days) - Training Curriculum as per DGCA", description: "Learn the basics of drone operation including safety protocols and basic flight maneuvers.", duration: 7, topic: 30, bgImage: '/training/train1.jpg', kg: 10 },
        { id: "10days", title: "Small & Medium Category (10 days) - Training Curriculum as per DGCA", description: "Master advanced flight techniques and maneuvers for various drone models.", duration: 10, topic: 65, bgImage: '/training/train3.png', kg: 16 },
    ];

    return (
        <>
            <FlipCard />
            <section className="training-section">
                <h2 data-aos="fade-up">Drone Training Courses</h2>
                <div className="course-card-container">
                    {courses.map((course, index) => (
                        <div 
                            id={course.id} 
                            className="course-card" 
                            key={index} 
                            data-aos="fade-down"
                            style={{ backgroundImage: `url(${course.bgImage})` }}
                            ref={course.id === "7days" ? sevenDaysRef : tenDaysRef}
                        >
                            <div className='course-details'>
                                <div className='course-icon'> 
                                    <div className='course-icon1'>
                                        <img src={topic} alt="Topic Icon"/>
                                        <p id={`${course.id}-topic`}>0</p>
                                        <span> Courses</span>
                                    </div>        
                                    <div className='course-icon1'>
                                        <img src={clock} alt="Clock Icon"/>
                                        <p id={`${course.id}-duration`}>0</p> 
                                        <span> Days </span>
                                    </div>
                                    <div className='course-icon1'>
                                        <img src={weight} alt="Weight Icon"/>
                                        <p id={`${course.id}-kg`}>0</p> 
                                        <span> KG </span>
                                    </div>
                                </div>
                                <h3>{course.title}</h3>
                                <p>{course.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Training;
