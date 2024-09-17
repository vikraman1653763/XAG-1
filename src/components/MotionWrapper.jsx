// MotionWrapper.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionWrapper = ({
  children,
  width = "fit-content",
  initial = "hidden",
  animate = "visible",
  transition = { duration: 1, ease: "easeInOut" },
  variants = { hidden: { opacity: 0, y: 0 }, visible: { opacity: 1, y: 0 } }
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const slideRef = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={transition}
      variants={variants}
      style={{ position: 'relative', display: 'inline-block', overflow: 'hidden', width }}
    >
      {children}
      <motion.div
        ref={slideRef}
        variants={{ hidden: { left: 0 }, visible: { left: '100%' } }}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={transition}
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, background: '#9BF00B', zIndex: 20 }}
      />
    </motion.div>
  );
};

export default MotionWrapper;
