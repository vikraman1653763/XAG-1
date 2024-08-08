import React, { useEffect, useState } from 'react';
import sky from '/Battery/4.webp';
import batteries from '/Battery/1.webp';
import field from '/Battery/3.webp';
import xlogo from '/assets/logoxx.svg';


function BatteryIntro() {

    const [offsetY ,setOffsetY]=useState(0);
    const handleScroll=()=>{setOffsetY(window.scrollY)};
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
    },[])


    const calculateOpacity = () => {
        const maxScroll = 500; 
        const opacity = 1 - Math.min(offsetY / maxScroll, 1);
        return opacity;
    };

  return (
    <section>

        <div className='intro-container'
        style={{transform:`translateY(${offsetY*.8}px)`}}>
            
            <img src={sky} className='sky'
            style={{transform:`translateY(-${offsetY*0.2}px)`}}
            />
        <div className='text'>
            <h2
            style={{transform:`translateY(${offsetY*0.7}px)`, opacity: calculateOpacity()}}

            >INTRODUCING </h2>
            <h3
                        style={{transform:`translateY(${offsetY*0.7}px)`, opacity: calculateOpacity()}}

            ><img src={xlogo}/>Power Plus</h3>
        </div>
            <img src={batteries} className='batteries'
                        style={{transform:`translateY(-${offsetY*0.5}px)`}}
/>
            <img src={field}className='field'
                       style={{transform:`-translateY(${offsetY*0.9}px)`}}
/>
           
      </div>
    </section>
  )
}

export default BatteryIntro
