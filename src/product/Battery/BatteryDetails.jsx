import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import batteriesData from '../../Batteries.json';
import '../../style/BatteryDetails.css';
import caution from '/assets/caution.svg';
import fire from '/assets/fire.svg';
import mii from '/assets/mii.webp';
import trash from '/assets/trash.svg';
import CE from '/assets/CE.svg';
import umberlla from '/assets/umberlla.svg';
import recycle from '/assets/recycle.svg';
import ScrollReveal from 'scrollreveal';
import ImageMagnifier from '../../components/imageMagnifier.jsx';
const cautionIcon = <img src={caution} alt="caution"/>;
const thumbIcon = <img src={'/assets/thumbsup.svg'} alt="caution"/>;

const BatteryDetails = () => {
    const { ID } = useParams();
    const battery = batteriesData.find(b => b['ID'] === parseInt(ID)); // Adjusted to match JSON structure

    if (!battery) {
        return <div>Battery not found</div>;
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        const sr = ScrollReveal({
            reset: false,
            duration: 500,
            easing: 'steps(500)',
            distance: '20px',
            origin:'left'
        });

        sr.reveal('.lisst', { interval: 100 });
        sr.reveal('.listright', { origin: 'right' });

    }, []);
   const connecterTitle =(image)=>{
    const text= image.replace("/connector/","").replace(".webp","");
    return text
   }
    
    return (

        <div className="indi-battery-details">
            <div className="indi-battery-header">
                <ImageMagnifier imgurl={battery.image}/>

                {/* <img src={battery.image} alt={battery.title} 
                className="indi-battery-image"/> */}

                <div className="indi-battery-info">
                    <h2>{battery.name}</h2>
                   
                        <h3>{battery.Model}</h3>
                   
                    <div className="indi-battery-price">
                        <span className='rupee'>₹</span>
                        {battery.price}</div>
                   
                        <p>Inclusive of all taxes</p>
                        <p>{battery.description}</p>
                   
                    <div className='safety-measure'>
                        <img src={mii} alt="mii"/>
                        <img src={fire} alt="fire"/>
                        <img src={recycle} alt="recycle"/>
                        <img src={trash} alt="trash"/>
                        <img src={CE} alt="CE"/>
                        <img src={umberlla} alt="umberlla"/>
                    </div>
                    <div className='connector-image'>
                        { battery.connectorImages.map((image,index)=>(
                            <img src={image} key={index} alt={`Connector ${index+1}`} title={`${connecterTitle(image)}`}/>
                        ))}
                  
                    </div>
                </div>
            </div>

            <div className="indi-battery-specs">
                <h2 className='listright'>Specifications</h2>
                <table>
                    <tbody>
                        {Object.entries( battery.specs).map(([key,value], index) => (
                            <tr key={index}>
                                <td className='lisst'>{key}</td>
                                <td className='lisst'>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <section className="indi-battery-caution">
                <h2 className='listright'>Precautions</h2>
                <p>Thank you for using X-POWER batteries. We provide you with high-quality UAV batteries. Please read all precautions before use.</p>
                <ul>
                   <li className='lisst'>{cautionIcon}Do not disassemble the battery without permission.</li>
                   <li className='lisst'>{cautionIcon}Keep away from flammable and explosive materials when storing products.</li>
                   <li className='lisst'>{cautionIcon}Please select a qualified smart charger.</li>
                   <li className='lisst'>{cautionIcon}Do not charge with current greater than 2C.</li>
                   <li className='lisst'>{cautionIcon}Charging voltage should not be higher than 25.2V to avoid overcharging.</li>
                   <li className='lisst'>{cautionIcon}Someone must be present when charging.</li>
                   <li className='lisst'>{cautionIcon}Battery voltage should be kept at 21.6V-22.5V if it is not used for a long time.</li>
                   <li className='lisst'>{cautionIcon}Do not over-discharge and short-circuit the battery.</li>
                   <li className='lisst'>{cautionIcon}Battery emits peculiar smell, heat and discoloration, in case of deformation or any abnormality during use, storage and charging, please immediately remove the battery from the UAV or charger and disable it.</li>
                </ul>
            </section>

            <section className="indi-battery-benefits">
                <h2 className='listright'>Benefits</h2>
                <ul>
                   <li className='lisst'>{thumbIcon}Longer flight times due to higher capacity.</li>
                   <li className='lisst'>{thumbIcon}Quick charging capabilities to reduce downtime.</li>
                   <li className='lisst'>{thumbIcon}Lightweight design to enhance drone efficiency.</li>
                   <li className='lisst'>{thumbIcon}High discharge rate for better power delivery.</li>
                   <li className='lisst'>{thumbIcon}Durable and reliable performance in various conditions.</li>
                   <li className='lisst'>{thumbIcon}Compatible with a wide range of drone models.</li>
                   <li className='lisst'>{thumbIcon}Environmentally friendly with recyclable materials.</li>
                </ul>
            </section>
        </div>
    );
};

export default BatteryDetails;
