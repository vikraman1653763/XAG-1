import React, { useEffect } from 'react';
import about1 from '/assets/about1.webp';
import about2 from '/assets/about2.webp';
import about3 from '/assets/about3.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section2 = () => {
    useEffect(() => {
        AOS.init({
<<<<<<< HEAD
            duration: 1000,
            mirror: false,
            offset:10,
=======
          duration: 500,
          mirror: true,
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
        });
      }, []);

    useEffect(() => {
        let slideIndex = 1;
        let timer;

        const showSlides = (n) => {
            const slides = document.querySelectorAll(".mySlides");
            const dots = document.querySelectorAll(".dots");

            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach((slide) => {
                slide.style.display = "none";
            });

            dots.forEach((dot) => {
                dot.classList.remove("active");
            });

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].classList.add("active");

            clearTimeout(timer);
            timer = setTimeout(() => showSlides(slideIndex += 1), 3000);
        };

        const nextSlide = () => {
            showSlides(slideIndex += 1);
        };

        const prevSlide = () => {
            showSlides(slideIndex -= 1);
        };

        const currentSlide = (n) => {
            showSlides(slideIndex = n);
        };

        document.querySelector(".prev").addEventListener("click", prevSlide);
        document.querySelector(".next").addEventListener("click", nextSlide);
        document.querySelectorAll(".dots").forEach((dot, index) => {
            dot.addEventListener("click", () => currentSlide(index + 1));
        });

        showSlides(slideIndex);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <section id="sec-2">
            <div className="bg-layer">
<<<<<<< HEAD
                <div className="text-container" >
                    <div>
                        <h3 className="one" data-aos="fade-up" data-aos-delay='800'>About</h3>
                        <h1 className="two" data-aos="fade-up" data-aos-delay='900'>xagrotor tek</h1>
                    </div>
                    <p data-aos="fade-up" data-aos-delay='1000'>Xagrotor Tek Private Limited, founded in 2023, is a pioneering company based in Pondicherry, India. We specialize in developing advanced agricultural drone technology aimed at improving farming practices. Our innovative solutions help farmers manage their crops more efficiently, reduce costs, and increase yields. With a strong commitment to sustainability, we promote precision farming techniques that benefit both farmers and the environment. Our team of experts is dedicated to pushing the boundaries of agricultural technology, ensuring that our products meet the highest standards of quality and reliability.</p>
                </div>
                <div className="carousel-container" data-aos="fade-up">
=======
                <div className="text-container" data-aos="fade-left">
                    <div>
                        <h3 className="one" data-aos="fade-left" data-aos-delay='700'>About</h3>
                        <h3 className="two" data-aos="fade-left" data-aos-delay='500'>xagrotor tek</h3>
                    </div>
                    <p>Xagrotor Tek Private Limited, founded in 2023, is a pioneering company based in Pondicherry, India. We specialize in developing advanced agricultural drone technology aimed at improving farming practices. Our innovative solutions help farmers manage their crops more efficiently, reduce costs, and increase yields. With a strong commitment to sustainability, we promote precision farming techniques that benefit both farmers and the environment. Our team of experts is dedicated to pushing the boundaries of agricultural technology, ensuring that our products meet the highest standards of quality and reliability.</p>
                </div>
                <div className="carousel-container" data-aos="fade-right">
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
                    <div className="mySlides animate">
                        <img src={about1} alt="slide" />
                    </div>
                    <div className="mySlides animate">
                        <img src={about2} alt="slide" />
                    </div>
                    <div className="mySlides animate">
                        <img src={about3} alt="slide" />
                    </div>
<<<<<<< HEAD
                    <button className="prev">&#10094;</button>
                    <button className="next">&#10095;</button>
=======
                    <a className="prev">&#10094;</a>
                    <a className="next">&#10095;</a>
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
                    <div className="dots-container">
                        <span className="dots"></span>
                        <span className="dots"></span>
                        <span className="dots"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
