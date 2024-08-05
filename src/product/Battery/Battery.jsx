import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import '../../style/Battery.css';
import data from '../../Batteries.json';
import { Link } from 'react-router-dom';
import BatteryBanner from"./BatteryBanner";
import BatterySpec from "./BatterySpec"
import BatteryIntro from './BatteryIntro';

const Battery = () => {
    const [batteries, setBatteries] = useState([]);

    useEffect(() => {
        setBatteries(data.batteries);
    }, []);

    useEffect(() => {
        const sr = ScrollReveal({
            reset: false,
            duration: 500,
            easing: 'steps(1111)',
            distance: '10px',
            origin:"bottom",
            disable: 'mobile',
        });

        sr.reveal('.battery-card');
        return () => {
            sr.destroy();
        };
    }, [batteries]);

    return (
        <>
        <BatteryIntro/>
        <BatterySpec/>
        <BatteryBanner/>
        <div id="battery-container">
            {data.map((battery,index) => (
                <div className="battery-card" key={index}>
                    <div className="battery-image">
                        <img src={battery.image} alt="Product" />
                    </div> 
                    <div className="battery-info">
                        <h2 className="battery-title">{battery.name}</h2>
                        <p className="battery-model">{battery.Model}</p>
                        <div className='battery-card-footer'>
                            <div className="battery-price">₹{battery.price}</div>
                            <Link to={`/battery/${battery.ID}`} className="add-to-cart">Details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default Battery;
