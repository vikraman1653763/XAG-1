import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import image1 from './images/demo.webm';
import image2 from './images/vid1.webm';
import image3 from './images/vid1.webm';
import image4 from './images/vid1.webm';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const videoRefs = useRef([]);

  const items = [
    {
      image: image1,
      title: "AGRI DRONE",
      topic: "AGR-16",
      link: '/agr16',
      description: "The AGR-16 by Xagrotor Tek is a high-tech farming drone designed to enhance precision and productivity. With a custom flight controller, it ensures smooth, accurate flying, making it an excellent tool for modern farming.",
    },
    {
      image: image2,
      title: "AGRI DRONE",
      topic: "AGR-10",
      link: '/agr10',
      description: "The AGR-10 is a hexacopter UAS from Xagrotor Tek, built for precise farming. It uses advanced technology and a custom flight controller to help farmers work more efficiently and improve productivity.",
    },
    {
      image: image3,
      title: "Flight Controller",
      topic: "Xrotor Tek India",
      link: '/flight-controller',
      description: "Xrotor Tek India AG-FMU is perfect for agricultural spraying, offering real-time tracking, support for nine languages, and future upgrades like live video streaming",
    },
    {
      image: image4,
      title: "BATTERY",
      topic: "Xpower Plus",
      link: '/Batteries',
      description: "Xpower Plus is designed for long-lasting power in drones, ensuring extended flight times and reliable performance for agricultural and industrial tasks. It's built for durability and efficiency, making it a dependable choice for demanding operations",
    },
  ];

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 7000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const showNextSlide = () => {
    stopAutoSlide(); // Stop the current interval
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    startAutoSlide(); // Start a new interval
  };

  const showPrevSlide = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.currentTime = 0;
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

  return (
    <div className="home-carousel">
      <div
        className="home-list"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.1s cubic-bezier(.175, .885, .32, 1.275)  "
        }}
      >
        {items.map((item, index) => (
          <div
            className={`home-item ${currentIndex === index ? "home-active" : ""}`}
            key={index}
          >
            <video
              className="home-image"
              autoPlay
              muted
              ref={(el) => (videoRefs.current[index] = el)}
            >
              <source src={item.image} type="video/webm" />
              Your browser does not support the video tag.
            </video>

            <div className="home-introduce">
              <div className="home-title">{item.title}</div>
              <div className="home-topic">{item.topic}</div>
              <div className="home-des">{item.description}</div>
              <button className="home-seeMore">
                <a href={item.link}>
                  SEE MORE <MdKeyboardDoubleArrowRight />
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="home-arrows-container">
        <div className="home-arrows">
          <button id="home-prev" onClick={showPrevSlide}>
            <IoIosArrowBack />
          </button>
          <button id="home-next" onClick={showNextSlide}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

const Section0 = () => {
  return (
    <div>
      <HomeCarousel />
    </div>
  );
};

export default Section0;
