import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




   
const Section3 = () => {
    useEffect(() => {
        const handleScopeProductClick = (e) => {
            const id = e.currentTarget.id;
            document.querySelectorAll('.item').forEach((item) => {
                if (item.id === id) {
                    item.classList.add('itemclick');
                    item.querySelector('.item-content').classList.remove('item-vertical-text');
                    item.querySelector('.item-content > p').classList.remove('d-none');
                    item.querySelector('.item-content > a').classList.remove('d-none');
                } else {
                    item.classList.remove('itemclick');
                    item.querySelector('.item-content').classList.add('item-vertical-text');
                    item.querySelector('.item-content > p').classList.add('d-none');
                    item.querySelector('.item-content > a').classList.add('d-none');
                }
            });
        };

        document.querySelectorAll('.item').forEach((item) => {
            item.addEventListener('click', handleScopeProductClick);
        });

        return () => {
            document.querySelectorAll('.item').forEach((item) => {
                item.removeEventListener('click', handleScopeProductClick);
            });
        };
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 900,
            mirror: false,
            offset:10
        });
      }, []);

    return (
        <section id="sec-3">
            <h2  data-aos="fade-up" data-aos-delay='400'>our scope <span>products</span></h2>
            <div className="gallery-wrap">
                <div id="scopeProduct1" className="item item-1 itemclick" >
                    <div className="item-content">
                        <h3>AGRI DRONE</h3>
                        <h4 >AGR 16</h4>
                        <p    >Your ultimate agri-drone solution, revolutionizing precision farming. Elevate your agricultural practices with unparalleled efficiency and data-driven insights.</p>
                        <a href="#"    >View Product</a>
                    </div>
                </div>
                <div id="scopeProduct2" className="item item-2">
                    <div className="item-content item-vertical-text">
                        <h3   >Flight Controller</h3>
                        <h4   >Xrotor tek india</h4>
                        <p    className="d-none">a customized flight controller for precise handling for extensive field coverage. Developed by Xagrotor Tek Private Limited</p>
                        <a    className="d-none" href="#">View Product</a>
                    </div>
                </div>
                <div id="scopeProduct3" className="item item-3">
                    <div className="item-content item-vertical-text">
                        <h3   >AGRI DRONE</h3>
                        <h4   >AGR 10</h4>
                        <p    className="d-none">Boost your farming with the AGR-16 drone, capable of carrying 16 liters to tackle large fields efficiently. Designed by Xagrotor Tek Private Limited, which makes crop management easy and effective.</p>
                        <a    className="d-none" href="#">View Product</a>
                    </div>
                </div>
                <div id="scopeProduct4" className="item item-4">
                    <div className="item-content item-vertical-text">
                        <h3   >Battery</h3>
                        <h4   >X power plus</h4>
                        <p    className="d-none">Explore our extensive selection of drone batteries, featuring over 30 varieties to power different models efficiently. Which ensures long-lasting performance and reliability for all your agricultural drone needs</p>
                        <a    className="d-none" href="#">View Product</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;