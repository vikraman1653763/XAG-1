import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { delay } from 'framer-motion';

const Section4 = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay:100,
            easing: 'ease-in-out',
        });
    }, []);



    const workingModes = [
        { title: "AB Mode", details: "AB mode allows for precise start and end point navigation.",icon:"/assets/route.svg" },
        { title: "Simulation", details: "Simulate flight paths and conditions before actual deployment.",icon:"/assets/screen.svg" },
        { title: "Fruit Tree Mode", details: "Special mode optimized for fruit tree spraying.",icon:"/assets/tree.svg" },
        { title: "Tree Mapping and Spraying", details: "Map and spray trees accurately with advanced algorithms.",icon:"/assets/code.svg" },
        { title: "Along the Boundary Spraying", details: "Spray along the boundaries with high precision.",icon:"/assets/fence.svg" },
        { title: "Point Throw mode", details: "Throw pesticides to specific points effectively.",icon:"/assets/target.svg" }
    ];

    return (
        <>
            

            <div className="working-modes">
                <h2 data-aos="fade-right"> MODES</h2>
                <div className="mode-card-container">
                    {workingModes.map((mode, index) => (
                        <div className={`mode-card mode-${index}`} key={index}  data-aos='flip-left' data-aos-delay={(1+index) * 100} data-aos-duration={(1+index) * 100}>
                            <img src={mode.icon}/>
                            <h3>{mode.title}</h3>
                            <p>{mode.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Section4;

