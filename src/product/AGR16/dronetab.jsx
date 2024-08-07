import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Detachable Tank', 'Superior Capacity', 'Quad Drone', 'RTK Technology','Gallery'];

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
        return <p>
        The AGR 16 revolutionizes agricultural drone design with its innovative detachable tank feature. Unlike traditional fixed tanks, the detachable tank of the AGR 16 can be manually removed with ease, offering unparalleled convenience and efficiency for farmers and operators. This design simplifies the processes of maintenance and refilling, reducing downtime and enhancing productivity. Additionally, the detachable tank provides greater flexibility, allowing the AGR 16 to adapt to various farming requirements seamlessly. This advancement demonstrates our commitment to delivering user-friendly, versatile solutions that cater to the dynamic needs of modern agriculture.
      </p>;
      case 'Superior Capacity':
        return <p>
        Setting a new benchmark in agricultural drone technology, the AGR 16 boasts an impressive 16-liter tank capacity. This high-capacity tank significantly reduces the frequency of refills, allowing for extended operational periods and enhancing overall efficiency. Ideal for large-scale farming operations, the AGR 16's superior capacity ensures that extensive areas can be covered with minimal interruptions. This feature, combined with advanced technology, makes the AGR 16 a powerful tool for maximizing productivity and achieving optimal results in agricultural tasks.
      </p>;
      case 'Quad Drone':
        return <p>
        In the medium category, where quad drones are conspicuously absent, our innovative solution stands out. Our quad drone fills this gap by offering unmatched performance and versatility specifically tailored for medium-scale agricultural operations. Designed to bridge the gap between small and large drones, it provides the perfect balance of power, efficiency, and ease of use. Farmers and operators can now benefit from a drone that delivers exceptional results in medium-scale tasks, setting new standards in agricultural technology and enhancing overall productivity.
      </p>;
      case 'RTK Technology':
        return <p>
        Our agricultural drones are equipped with advanced Real-Time Kinematic (RTK) technology, ensuring unparalleled precision in spreading and spraying operations. This cutting-edge feature allows for centimeter-level accuracy, dramatically reducing waste and enhancing efficiency. With RTK, farmers can achieve optimal coverage and uniform application, which results in better crop health and increased yield. Embrace the future of precision agriculture with our RTK-enabled drones, where advanced technology meets efficiency for superior farming outcomes.
      </p>;
       case 'Gallery':
        return <p>
        Explore our comprehensive gallery to see the AGR 16 in action. Witness firsthand the impressive features and capabilities that make it a standout choice in agricultural technology. Our gallery showcases various aspects of the AGR 16, from its innovative design and high-capacity tank to its precision spraying and spreading abilities. By visualizing its performance in real-world scenarios, you can gain a deeper understanding of how the AGR 16 can transform your agricultural operations and deliver superior results.
      </p>;
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
