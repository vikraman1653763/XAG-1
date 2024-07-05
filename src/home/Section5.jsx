import React, { useEffect } from 'react';

const Section5 = () => {
    useEffect(() => {
        const startCounter = (counter) => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const interval = setInterval(() => {
                count += 1;
                counter.innerText = count;
                if (count === target) clearInterval(interval);
            }, 10);
        };

        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        const handleScroll = () => {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                if (isInViewport(counter) && !counter.classList.contains('counting')) {
                    startCounter(counter);
                    counter.classList.add('counting');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="sec-5">
            <h3>Our result<span> in numbers</span></h3>
            <div className="card-collection">
                <div className="card-bg">
                    <span></span>
                    <span></span>
                    <div className="card">
                        <div className="card-content">
                            <div className="count">
                                <div className="counter" data-target="100">0</div>
                                <p> +</p>
                            </div>
                            <div className="content-div">
                                <h4>Company growth</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscin.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-bg">
                    <span></span>
                    <span></span>
                    <div className="card">
                        <div className="card-content">
                            <div className="count">
                                <div className="counter" data-target="200">0</div>
                                <p> +</p>
                            </div>
                            <div className="content-div">
                                <h4>Projects Completed</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscin.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-bg">
                    <span></span>
                    <span></span>
                    <div className="card">
                        <div className="card-content">
                            <div className="count">
                                <div className="counter" data-target="150">0</div>
                                <p> +</p>
                            </div>
                            <div className="content-div">
                                <h4>Clients Served</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscin.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-bg">
                    <span></span>
                    <span></span>
                    <div className="card">
                        <div className="card-content">
                            <div className="count">
                                <div className="counter" data-target="300">0</div>
                                <p> +</p>
                            </div>
                            <div className="content-div">
                                <h4>Awards Won</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscin.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-bg">
                    <span></span>
                    <span></span>
                    <div className="card">
                        <div className="card-content">
                            <div className="count">
                                <div className="counter" data-target="250">0</div>
                                <p> +</p>
                            </div>
                            <div className="content-div">
                                <h4>Innovations</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscin.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section5;
