import React, { useState } from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

const ExpandingText = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ margin: '10em' }}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Text</button>
      <motion.p
        variants={itemVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        style={{ overflow: 'hidden', backgroundColor: '#f5f5f5', padding: '1rem' }}
      >
        This is some content that expands and collapses when the button is clicked.
      </motion.p>
    </div>
  );
};

export default ExpandingText;
