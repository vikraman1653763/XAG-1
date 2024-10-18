import React, { useState, useEffect, useRef } from "react";
import shade from "/assets/shade.webp";
import image1 from '/assets/demo9.webp';
import image3 from '/assets/demo3.webp';
import image4 from '/assets/demo10.webp';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasLoaded, setHasLoaded] = useState(false); // State to ensure carousel starts only after fully loaded
  const intervalRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  // Auto-slide setup
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 7000); // 7 seconds interval
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };
  
  const handleManualChange = (changeFunc) => {
    stopAutoSlide();
    changeFunc();
    startAutoSlide();
  };
  
  useEffect(() => {
    if (hasLoaded) {
      startAutoSlide();
      setCurrentIndex(0);
    }
    return () => stopAutoSlide();
  }, [hasLoaded]);
  
  // Ensure the carousel only starts after the component has loaded
  useEffect(() => {
    setHasLoaded(true); // Mark the component as fully loaded
  }, []);
  
  return (
    <div className="home-carousel">
      <img
        src={shade}
        alt="shade"
        className="shade"
        style={{
          transform: `translateY(-${offsetY * .65}px)`,
        }}
      />
      <div
        className="home-list"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: hasLoaded ? "transform 0.1s ease-in-out" : "none", // Only apply transition after loaded
        }}
        >
        {items.map((item, index) => (
          <div
          className={`home-item ${currentIndex === index ? 'home-active' : ''}`} // Add 'home-active' to active slide
          key={index}
          >
            <img src={item.image} className="home-image" alt={item.title} />
            <div className={`home-introduce `}>
              <div className="home-title">{item.title}</div>
              <div className="home-topic">{item.topic}</div>
              <div className="home-des">{item.description}</div>
              <button className="home-seeMore">
              <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}  aria-label={` Learn more about the ${item.topic}`}>
              Explore More <MdKeyboardDoubleArrowRight />
              </Link>
            </button>

            </div>
          </div>
        ))}
      </div>
      <div className="home-arrows-container">
        <div className="home-arrows">
          <button className="home-prev" id="home-prev" aria-label="Previous Slide" onClick={() => handleManualChange(handlePrev)}>
            <IoIosArrowBack />
          </button>
          <button className="home-next" id="home-next" aria-label="Next Slide" onClick={() => handleManualChange(handleNext)}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

const items = [
  {
    image: image3,
    title: "AGRI DRONE",
    topic: "AGR-16",
    link: '/agr16',
    clas:'',
    description: "The AGR-16 by Xagrotor Tek is a high-tech farming drone designed to enhance precision and productivity and ensures smooth, accurate flying, making it an excellent tool for modern farming.",
  },
  {
    image: image4,
    title: "Flight Controller",
    topic: "Xrotor Tek India",
    link: '/flight-controller',
    clas:'',
    description: "Xrotor Tek India AG-FMU is perfect for agricultural spraying, offering real-time tracking, support for nine languages, and future upgrades like live video streaming",
  },
  {
    image: image3,
    title: "AGRI DRONE",
    topic: "AGR-10",
    link: '/agr16',
    clas:'',
    description: "The AGR-10 is a hexacopter UAS from Xagrotor Tek, built for precise farming. It uses advanced technology and a custom flight controller to help farmers work more efficiently and improve productivity.",
  },
  {
    image: image1,
    title: "BATTERY",
    topic: "Xpower Plus",
    link: '/Batteries',
    clas:'',
    description: "Xpower Plus is designed for long-lasting power in drones, ensuring extended flight times and reliable performance for agricultural and industrial tasks.",
  },
];
export default HomeCarousel;
