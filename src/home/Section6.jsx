import React, { useEffect, useState } from 'react';
import { TbDrone } from "react-icons/tb";
import { serverUrl } from "../constant.js";

const Section6 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [timer, setTimer] = useState(null);
    const[textimonials,setTextimonials] =useState([]);
    const textimonials1 = [
        {
            feedback: `"Xagrotor Tek's drones have transformed my farming practice. The ease of use and precision have made managing my crops more efficient and less labor-intensive. The technology has also helped me reduce pesticide use, which is great for both the environment and my bottom line. Their support team is incredibly responsive and knowledgeable."`,
            name: 'Dheepak Raj, Organic Farmer'
        },
        {
            feedback: `"Since integrating Xagrotor Tek's drone technology into our operations, we've seen a remarkable improvement in crop health and yield. The data-driven insights provided by the drones allow us to make more informed decisions, leading to better resource management and cost savings. The company's commitment to sustainability aligns perfectly with our values."`,
            name: 'Vikraman, Agribusiness Owner'
        },
        {
            feedback: `"Xagrotor Tek's agricultural drones have been a game-changer for us. The precision and efficiency of the drones have significantly improved our crop monitoring and management. We've been able to detect and address issues early, preventing potential losses. The team at Xagrotor Tek is always helpful and provides excellent support."`,
            name: 'Anita Desai, Vineyard Manager'
        },
        {
            feedback: `"Using Xagrotor Tek's drones has streamlined our farming processes. The real-time data and aerial views have given us new perspectives on our fields, helping us to optimize planting and irrigation strategies. The technology is user-friendly, and the customer service is top-notch. We've never been more efficient."`,
            name: 'Ramesh Gupta, Rice Farmer'
        },
        {
            feedback: `"The impact of Xagrotor Tek's drone technology on our farm has been profound. We've experienced a notable increase in efficiency and productivity. The drones' ability to cover large areas quickly and provide detailed analysis has saved us time and money. Xagrotor Tek's commitment to innovation and sustainability makes them a trusted partner in our agricultural journey."`,
            name: 'Priya Nair, Coffee Plantation Owner'
        }
    ];
useEffect(()=>{
    const fetchTest = async ()=>{
        try{
            const response = await fetch(`${serverUrl}/api/testimonials`)
            if(response.ok){
                const data = await response.json()
                setTextimonials(data)
            } else{
                console.error("unable to fetch testimonial data")
                setTextimonials(textimonials1)
            }
        }catch(error){
            setTextimonials(textimonials1);
        }
    }
    fetchTest()
},[])
  

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % textimonials.length);
        }, 3000);

        setTimer(interval);

        return () => clearInterval(interval);
    }, [textimonials.length]);

    const handleProfileClick = (index) => {
        clearInterval(timer);
        setCurrentSlide(index);
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % textimonials.length);
        }, 3000);
        setTimer(interval);
    };

    return (
        <section id="sec-6">
            <div className="main-textimonial">
                <h3>what they say <span>about us</span></h3>
                <div className="textimonial">
                    <div className="textimonial-container">
                        {textimonials.map((textimonial, index) => (
                            <div
                                key={index}
                                className={`comments effect ${currentSlide === index ? 'acti' : 'inacti'}`}
                                style={{ display: currentSlide === index ? 'block' : 'none' }}
                            >
                                <p>{textimonial.feedback}</p>
                                <h2>- {textimonial.name}</h2>
                            </div>
                        ))}
                    </div>
                    <div className="profiles ">
                        {textimonials.map((textimonial, index) => (
                            <div
                                key={index}
                                className={`profile ${currentSlide === index ? 'current' : ''}`}
                                onClick={() => handleProfileClick(index)}
                            >
                                <TbDrone  className='profile-img'/>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section6;
