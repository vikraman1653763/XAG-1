import React ,{useState}from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function SectionFAQ() {

    const faqs = [
        {
            q: 'Why choose Xagrotor Tek?',
            a: `Choosing Xagrotor Tek means opting for innovative and reliable agricultural drone solutions that are tailored to the needs of modern farming. Our drones are equipped with advanced technology, including the X RotorTek India flight controller, and are designed to be cost-effective, safe, and efficient. We provide comprehensive support and continuous monitoring to ensure optimal performance, making us a trusted partner in enhancing agricultural productivity.`
        },
        {
            q: 'What services does Xagrotor Tek offer?',
            a: "Xagrotor Tek offers a range of services including drone-based crop spraying, real-time video monitoring, precision agriculture solutions, and custom drone manufacturing."
        }, {
            q: 'What is the X RotorTek India flight controller?',
            a: "The X RotorTek India flight controller is a custom-made autopilot system developed by Xagrotor Tek, featuring real-time video recording and point-to-point tree spraying capabilities."
        }, {
            q: 'How are Xagrotor Tek drones cost-effective?',
            a: "Xagrotor Tek drones are designed to be more affordable compared to competitors, offering high efficiency and reliability while reducing operational costs for farmers."
        }, {
            q: 'What is the payload capacity of Xagrotor Tek drones?',
            a: "Xagrotor Tek drones have various payload capacities, including both 16-liter and 10-liter sprayer payload with precision spraying, adjustable nozzles, anti-drip design, and a high-efficiency pump."
        }, {
            q: 'What safety features are included in Xagrotor Tek drones?',
            a: `Xagrotor Tek drones are equipped with over-current and overheating protection systems for the motor-ESC, and the battery contains a Battery Management System (BMS) for accurate current sensing and temperature recording.`
        }, {
            q: 'What kind of batteries does Xagrotor Tek use?',
            a: "Xagrotor Tek uses customized batteries specifically designed for Indian agricultural conditions, featuring a special chemical formula, lightweight design, and a greater discharge rate of up to 10C."
        },
       
    ];
    

const [activeIndex, setActiveIndex] = useState(null);

const toggleActive=(index)=>{
setActiveIndex(activeIndex===index?null:index);
}


  return (
    <section className='faq-container'>
      <h1 className='faq-title'>FAQ<span>s</span></h1>

    <div className='faq-section'>

        {faqs.map((faq,index)=>(
            <div 
            className={`faq-card ${activeIndex===index?'faq-active':''}`} 
            key={index} 
            onClick={()=>{toggleActive(index)}}>

                <div className='faq-question'>
                    <h3>{faq.q}</h3>
                    {activeIndex===index?<FaMinus/>:<FaPlus/>}
                   
                </div>
                <div className='faq-answer'>
                    <p>{faq.a}</p>
                </div>
            </div>
        ))}

      
    </div>
        </section>
  )
}

export default SectionFAQ
