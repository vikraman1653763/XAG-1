import React,{useEffect} from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Section5 = () => {
    useEffect(() => {
        AOS.init({
            duration: 1250,
            easing: 'cubic-bezier(0.09, 1.88, 0.48, -0.78)',
        });
    }, []);



    return (
        <div className="controller-specifications">
    
            <h2 data-aos="fade-down">Specifications</h2>
            <div className="controller-specs-container">

                <div className='fc-img'> 
                    <img src='/fc/fc.webp'/>
                </div>

    <div className='controller-spec-card'  data-aos="fade-up">
        <h3>Size</h3>
        <p>FMU:73mm*46mm*18.5mm  PMU:88mm*44mm*15.5mm</p>
    </div>

    <div className='controller-spec-card'  data-aos="fade-up">
        <h3>Weight</h3>
        <p>FMU:65g / PMU:80g</p>
    </div>
    
    <div className='controller-spec-card'  data-aos="fade-up">
        <h3>Power supply</h3>
        <p>20V~100V (4S~20S)</p>
    </div> 

    <div className='controller-spec-card'  data-aos="fade-up">
        <h3>Work temperature</h3>
        <p>-25°C~60°C</p>
    </div>     

    <div className='controller-spec-card'  data-aos="fade-up">
        <h3>Max Altitude</h3>
        <p>5000 meters</p>
    </div>

    <div className='controller-spec-card'  data-aos="fade-up">
        <h3>Battery Life</h3>
        <p>Up to 2 hours continuous operation</p>
    </div>
</div>
       


            <div className='ripple-background'>
                    <div className='circle xxlarge shade1'></div>
                    <div className='circle xlarge shade2'></div>
                    <div className='circle large shade3'></div>
                    <div className='circle mediun shade4'></div>
                    <div className='circle small shade5'></div>
            </div>
            <div className='ripple-background2'>
                    <div className='circle xxlarge2 shade1'></div>
                    <div className='circle xlarge2 shade2'></div>
                    <div className='circle large2 shade3'></div>
                    <div className='circle mediun2 shade4'></div>
                    <div className='circle small2 shade5'></div>
            </div>
        </div>
    );
};

export default Section5;

