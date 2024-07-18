import React, { useEffect } from 'react';
import about1 from '/assets/about1.webp';
import about2 from '/assets/about2.webp';
import about3 from '/assets/about3.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section2 = () => {


    useEffect(() => {
        AOS.init({
          duration: 500,
          mirror: true,
        });
      }, []);

    useEffect(() => {
        let slideIndex = 0;
        let timer;

        const showSlides = () => {
            const slides = document.querySelectorAll(".mySlides");
            const dots = document.querySelectorAll(".dots");

            slides.forEach((slide) => {
                slide.style.display = "none";
            });

            dots.forEach((dot) => {
                dot.classList.remove("active");
            });

            slideIndex++;
            if (slideIndex > slides.length) slideIndex = 1;
            if (slideIndex < 1) slideIndex = slides.length;

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].classList.add("active");

            timer = setTimeout(showSlides, 3000);
        };

        const nextSlide = () => {
            clearTimeout(timer);
            slideIndex++;
            showSlides();
        };

        const prevSlide = () => {
            clearTimeout(timer);
            slideIndex--;
            showSlides();
        };

        const currentSlide = (n) => {
            clearTimeout(timer);
            slideIndex = n;
            showSlides();
        };

        document.querySelector(".prev").addEventListener("click", prevSlide);
        document.querySelector(".next").addEventListener("click", nextSlide);
        document.querySelectorAll(".dots").forEach((dot, index) => {
            dot.addEventListener("click", () => currentSlide(index + 1));
        });

        showSlides();

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <section id="sec-2">
            <div className="bg-layer">
                <div className="text-container" data-aos="fade-left">
                    <div>
                        <h3 className="one"data-aos="fade-left" data-aos-delay='700'>About</h3>
                        <h3 className="two"data-aos="fade-left" data-aos-delay='500'>xagrotor tek</h3>
                    </div>
                    <p>Xagrotor Tek Private Limited, founded in 2023, is a pioneering company based in Pondicherry, India. We specialize in developing advanced agricultural drone technology aimed at improving farming practices. Our innovative solutions help farmers manage their crops more efficiently, reduce costs, and increase yields. With a strong commitment to sustainability, we promote precision farming techniques that benefit both farmers and the environment. Our team of experts is dedicated to pushing the boundaries of agricultural technology, ensuring that our products meet the highest standards of quality and reliability.</p>
                </div>
                <div className="carousel-container" data-aos="fade-right">
                    <div className="mySlides animate">
                        <img src={about1} alt="slide" />
                    </div>
                    <div className="mySlides animate">
                        <img src={about2} alt="slide" />
                    </div>
                    <div className="mySlides animate">
                        <img src={about3} alt="slide" />
                    </div>
                    <a className="prev">&#10094;</a>
                    <a className="next">&#10095;</a>
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
