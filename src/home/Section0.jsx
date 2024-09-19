import React, { useState, useEffect, useRef } from "react";
import shade from "/assets/shade.png";
import image1 from './images/demo1.webp';
import image2 from './images/demo2.webp';
import image3 from './images/demo3.webp';
import image4 from './images/demo1.webp';
import image from './images/vid1.webm'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const HomeCarousel = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const videoRefs = useRef([]); 
const[offsetY,setOffsetY]=useState(0)
const handleScroll = ()=>{setOffsetY(window.scrollY)};

useEffect(()=>{
window.addEventListener("scroll",handleScroll)
return () => {
  window.removeEventListener("scroll", handleScroll);
};
},[])

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
    if (!isTransitioning) {
      stopAutoSlide();
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      startAutoSlide();
    }
  };

  const showPrevSlide = () => {
    if (!isTransitioning) {
      stopAutoSlide();
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
      startAutoSlide();
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  useEffect(() => {
    setIsTransitioning(false);
    // Pause all videos except the current one
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

  useEffect(() => {
    setHasLoaded(true);
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <div className="home-carousel" >
      <img src={shade} alt="shade" className="shade" style={{
          transform: `translateY(-${offsetY * .2}px)` // Apply parallax effect
        }}/>
      <div
        className="home-list"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.6s ease-in-out" : "none"
        }}
      >
        {items.map((item, index) => (
          <div
            className={`home-item ${
              currentIndex === index && hasLoaded ? "home-active" : ""
            }`}
            key={index}
          >
            <video className="home-image" autoPlay muted ref={(el) => (videoRefs.current[index] = el)} >
                <source src={image} type="video/webm" />
                Your browser does not support the video tag.
            </video>


            
              <img src={item.image} className="home-image"/>
            <div className="home-introduce">
              <div className="home-title">{item.title}</div>
              <div className="home-topic">{item.topic}</div>
              <div className="home-des">{item.description}</div>
              <button className="home-seeMore">
                <a href={item.link}>
                  Learn More <MdKeyboardDoubleArrowRight />
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

export default HomeCarousel;
