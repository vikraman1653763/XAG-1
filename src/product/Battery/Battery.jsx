import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import '../../style/Battery.css';
import data from '../../Batteries.json';
import { Link } from 'react-router-dom';

const Battery = () => {
    const [batteries, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data.batteries);
    }, []);

    useEffect(() => {
        const sr = ScrollReveal({
            reset: true,
            duration: 1000,
            easing: 'steps(1111)',
            distance: '50px',
            origin:"bottom",
            disable: 'mobile'
        });

        sr.reveal('.battery-card', { interval: 100 });
    }, [batteries]);

    return (
        <div id="battery-container">
            {batteries.map((battery, index) => (
                <div className="battery-card" key={index}>
                    <div className="battery-image">
                        <img src={battery.image} alt="Product" />
                    </div>
                    <div className="battery-info">
                        <h2 className="battery-title">{battery.title}</h2>
                        <p className="battery-description">{battery.description}</p>
                        <div className='battery-card-footer'>
                            <div className="battery-price">₹{battery.price}</div>
                            <Link to={`/battery/${battery.title}`} className="add-to-cart">Details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Battery;
