import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Overview', 'Specifications', 'Features', 'Gallery'];

const DroneTabs = () => {
  const [activeTab, setActiveTab] = useState('Overview');

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
      case 'Overview':
        return <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio Praesent libero. Sed cursus ante dapibus Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.Praesent mauris. Fusce nec tellus sed augue semper porta Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."</p>;
      case 'Specifications':
        return <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio Praesent libero. Sed cursus ante dapibus Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.Praesent mauris. Fusce nec tellus sed augue semper porta Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."</p>;
      case 'Features':
        return <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio Praesent libero. Sed cursus ante dapibus Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.Praesent mauris. Fusce nec tellus sed augue semper porta Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."</p>;
      case 'Gallery':
        return <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio Praesent libero. Sed cursus ante dapibus Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.Praesent mauris. Fusce nec tellus sed augue semper porta Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."</p>;
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
      <div className="tabb-content">
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
