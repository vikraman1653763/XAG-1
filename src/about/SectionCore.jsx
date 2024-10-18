import React,{useEffect} from 'react'
import core1 from '/assets/core1.webp';
import core2 from '/assets/core2.webp';
import core3 from '/assets/core3.webp';
import 'aos/dist/aos.css';
import Aos from 'aos';

function SectionCore() {
    useEffect(()=>{
        Aos.init({
            duration:700,
            mirror:true,
            easing:"ease-in-out",
        })
    },[])
  return (
    <div className='coreSection'>

         <div className="head">
            <h2 className="heading"> Our</h2>
            <div className="misson-texteffect">
              <h2 data-aos="fade-up">Core Value</h2>
            </div>
        </div>

        <section className="content-grid">
    <div className='coreContent coreBox1'>
        <h3>Customer Focus</h3>
        <p>Putting the customer at the center of everything we do, we work tirelessly to understand their evolving needs, ensuring every interaction is meaningful. Our commitment is to create lasting value by providing exceptional service and tailored solutions that not only meet but exceed customer expectations.</p>
    </div>
    <div className='coreContent coreBox2' data-aos="fade-up" >
        <img src={core2} alt="core1" className='coreImg '/>
    </div>
    <div className='coreContent coreBox3'>
        <h3>Innovation</h3>
        <p>Constantly seeking new and better ways to achieve our goals, we foster a culture of creativity and forward-thinking. By embracing cutting-edge technologies and reimagining traditional approaches, we challenge boundaries to bring fresh, impactful solutions that drive sustainable growth and success.</p>
    </div>
    <div className='coreContent coreBox4'  data-aos="fade-down">
        <img src={core1} alt="core2" className='coreImg '/>
    </div>
    <div className='coreContent coreBox5'>
        <h3>Integrity</h3>
        <p>Maintaining the highest standards of honesty and ethical behavior, we lead with transparency and accountability. Every decision we make is rooted in a strong moral foundation, ensuring we build trust with our customers, partners, and employees while fostering a culture of mutual respect and responsibility.</p>
    </div>
    <div className='coreContent coreBox6' data-aos="fade-down">
        <img src={core3} alt="core3" className='coreImg '/>
    </div>
</section>


    </div>
  );
}

export default SectionCore;

