import React ,{useState}from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function SectionFAQ() {

    const faqs = [
        {
            q: 'What is a drone?',
            a: "A drone is an unmanned aircraft or ship guided by remote control or onboard computers."
        }, {
            q: 'What is a drone used for?',
            a: "Drones are used for various purposes including photography, delivery, surveillance, and more."
        }, {
            q: 'How do drones impact environmental monitoring?',
            a: `Drones play a significant role in environmental monitoring by providing a unique vantage point that is less invasive, more cost-effective, and often more detailed than traditional monitoring methods. They are used to:
    
    - **Track wildlife and monitor populations:** Drones collect data on animal numbers, behaviors, and movements without significant human interference, which can be especially useful in remote or sensitive habitats.
    
    - **Assess plant health and forest coverage:** Using various imaging technologies, including infrared and multispectral sensors, drones can assess plant health over large areas and detect changes in forest coverage, helping in efforts to combat deforestation.
    
    - **Monitor water quality:** Equipped with appropriate sensors, drones can help in collecting data from water bodies, detecting pollutants, and understanding water flow patterns.
    
    - **Observe weather and atmospheric conditions:** Drones equipped with weather monitoring instruments can provide data for forecasting and tracking environmental changes.
    
    These capabilities make drones invaluable tools in conservation efforts, helping researchers, governments, and organizations monitor the health of the planet more effectively and react more quickly to environmental crises.`
        }
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

      <div className='faq-card'>
      <div className='faq-question'>
        <h3>what is xagrotor ?</h3>
         <FaPlus />
      </div>
    <div className='faq-answer'>
        <p>Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.</p>
    </div>
    </div>
    </div>
        </section>
  )
}

export default SectionFAQ
