import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Detachable Tank', 'Optimal Capacity', 'Hexa Drone', 'RTK Technology', 'Gallery'];

const DroneTabs = () => {
  const [activeTab, setActiveTab] = useState('Detachable Tank');

  useEffect(() => {
    let currentIndex = tabs.indexOf(activeTab);

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[currentIndex]);
    }, 5000); // Change tab every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Detachable Tank':
        return (
          <p>
            The AGR 10 is designed with a convenient detachable tank feature, allowing for easy removal and reattachment during operations. This design not only facilitates quick maintenance and refilling but also minimizes downtime, making it a highly efficient tool for farmers. The detachable tank design of the AGR 10 demonstrates our commitment to practical, user-friendly solutions that enhance productivity in agricultural tasks.
          </p>
        );
      case 'Optimal Capacity':
        return (
          <p>
            The AGR 10 features a 10-liter tank capacity, perfectly suited for medium-scale agricultural operations. This optimal capacity ensures a balance between extended operational periods and manageable weight, providing efficiency without compromising maneuverability. The AGR 10’s capacity allows for effective coverage of moderate areas, making it an ideal choice for diverse farming needs.
          </p>
        );
      case 'Hexa Drone':
        return (
          <p>
            The AGR 10 is equipped with six powerful motors, forming a robust hexa drone configuration. This six-wing design provides enhanced stability and lifting power, making the AGR 10 capable of handling demanding agricultural tasks with precision and reliability. The hexa drone setup ensures that even in challenging conditions, the AGR 10 remains stable and effective, delivering consistent results.
          </p>
        );
      case 'RTK Technology':
        return (
          <p>
            The AGR 10 is integrated with Real-Time Kinematic (RTK) technology, offering superior accuracy in all agricultural applications. RTK technology provides centimeter-level precision, ensuring optimal coverage and reducing input waste. This precision technology is essential for tasks requiring detailed and accurate operations, making the AGR 10 a vital tool in modern precision agriculture.
          </p>
        );
      case 'Gallery':
        return (
          <p>
            Explore our gallery to see the AGR 10 in action, showcasing its capabilities and innovative design. From its detachable tank and optimal capacity to its hexa drone stability and RTK precision, the gallery highlights how the AGR 10 can transform your farming practices. See for yourself why the AGR 10 is a leading choice for efficient, reliable agricultural technology.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? 'active' : ''}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="tab-content"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DroneTabs;
