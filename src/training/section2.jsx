import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../style/Training.css';
import clock from "/assets/time.svg";
import topic from "/assets/topi.svg";
import weight from "/assets/weight.svg";
import { increaseNumberAnimation } from '../components/increment.js';
import { useInView } from 'react-intersection-observer';
import { FaAngleLeft,FaAngleRight  } from "react-icons/fa";
import { BiSolidQuoteRight } from "react-icons/bi";
import { courses } from '../constant.js';

const Training = () => {
    const { ref: sevenDaysRef, inView: sevenDaysInView } = useInView({ triggerOnce: true });
    const { ref: tenDaysRef, inView: tenDaysInView } = useInView({ triggerOnce: true });
    
    const initialDaySelections = courses.reduce((acc, course) => {
        acc[course.id] = course.days[0]; 
        return acc;
    }, {});
    const [selectedDay, setSelectedDay] = useState(initialDaySelections);

    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-in-out',
        });
    }, []);

    useEffect(() => {
        const totalAnimationDuration = 3000; 
        if (sevenDaysInView) {
            increaseNumberAnimation("7days-duration", 7, totalAnimationDuration);
            increaseNumberAnimation("7days-topic", 68, totalAnimationDuration);
            increaseNumberAnimation("7days-kg", 25, totalAnimationDuration);
        }
        if (tenDaysInView) {
            increaseNumberAnimation("10days-duration", 10, totalAnimationDuration);
            increaseNumberAnimation("10days-topic", 74, totalAnimationDuration);
            increaseNumberAnimation("10days-kg", 150, totalAnimationDuration);
        }
    }, [sevenDaysInView, tenDaysInView]);

    const handleCourseSelection = (courseId, dayInfo) => {
        setSelectedDay(prev => ({ ...prev, [courseId]: dayInfo }));       
    };

    const prevDay = (courseId) => {
        setSelectedDay(prev => {
            const currentDay = prev[courseId];
            const dayIndex = courses.find(course => course.id === courseId).days.findIndex(day => day.day === currentDay.day);
            const prevDay = courses.find(course => course.id === courseId).days[Math.max(0, dayIndex - 1)];
            return { ...prev, [courseId]: prevDay };
        });
    }
    
    const nextDay = (courseId) => {
        setSelectedDay(prev => {
            const currentDay = prev[courseId];
        
            // courses.days.day 
            const dayIndex = courses.find(course => course.id === courseId).days.findIndex(day => day.day === currentDay.day);
            
            const nextDay = courses.find(course => course.id === courseId).days[Math.min(courses.find(course => course.id === courseId).days.length - 1, dayIndex + 1)];
            return { ...prev, [courseId]: nextDay };
        });
    }
    
    return (
        <>
            <section className="training-section">
                <h2 >Training Curriculum</h2>
                <div className="course-card-container">
                    {courses.map((course) => (
                        <div key={course.id} >
                            <div 
                                id={course.id} 
                                className="course-card" 
                                
                                ref={course.id === "7days" ? sevenDaysRef : tenDaysRef}
                            >
                                <div className='course-details'>
                                    <div className='course-icon'> 
                                        <div className='course-icon1'>
                                            <img src={clock} alt="Clock Icon" />
                                            <p id={`${course.id}-duration`}>0</p> 
                                            <span> Days </span>
                                        </div>
                                        <div className='course-icon1'>
                                            <img src={weight} alt="Weight Icon" />
                                        
                                            <p id={`${course.id}-kg`}>0</p> 
                                            <span> KG </span>
                                        </div>
                                        <div className='course-icon1'>
                                            <img src={topic} alt="Topic Icon" />
                                            <p id={`${course.id}-topic`}>0</p>
                                            <span> topics</span>
                                        </div>        
                                    </div>
                                    <h3>{course.title}</h3>
                                    <p>{course.description}</p>
                                </div>
                            </div>

                            <div className="day-content">
                                <div className="day-nav">
                           
                                    <FaAngleLeft onClick={() => prevDay(course.id)} />

                                    {course.days.map((dayInfo, dayIndex) => (
                                        <button
                                        key={`${course.id}-${dayIndex}`}
                                        onClick={() => handleCourseSelection(course.id, dayInfo)}
                                        className={selectedDay[course.id]?.day === dayInfo.day ? 'selected' : ''}
                                        >
                                            {dayInfo.day}
                                        </button>
                                    ))}
                                    <FaAngleRight onClick={()=>nextDay(course.id)}/>
                                </div>

                                {selectedDay[course.id] && (
                                    <div className='course-day-container'>
                                        <h2>Day-{selectedDay[course.id].day}</h2>
                                        <div className="course-day-details">
                                            {selectedDay[course.id].courseDetails.map((detail, index) => (
                                                <div key={index} className='course-day-details-box'>
                                                    <h3>{detail.title}</h3>
                                                    <ul>
                                                        {detail.content.split(',').map((point, idx) => (
                                                            <li key={idx}><BiSolidQuoteRight />
                                                            {point.trim()}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div> 
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Training;
