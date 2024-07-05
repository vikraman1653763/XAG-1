// Advantages.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const zoomVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const Advantages = () => {
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section className='advantages'>
      <h4 className='agr16-type'><span>Advantages</span> of AGR16 Drones</h4>
      <div className="advantage-points">
        <motion.div 
          className="advantage-point" 
          animate={inView1 ? 'visible' : 'hidden'} 
          variants={zoomVariants} 
          ref={ref1}
        >
          <h5>High Precision</h5>
          <p>AGR16 drones offer unparalleled precision in spraying and seeding.</p>
        </motion.div>
        <motion.div 
          className="advantage-point" 
          animate={inView2 ? 'visible' : 'hidden'} 
          variants={zoomVariants} 
          ref={ref2}
        >
          <h5>Cost-Effective</h5>
          <p>Reduce operational costs with efficient and effective technology.</p>
        </motion.div>
        <motion.div 
          className="advantage-point" 
          animate={inView3 ? 'visible' : 'hidden'} 
          variants={zoomVariants} 
          ref={ref3}
        >
          <h5>Sustainable</h5>
          <p>Promote sustainable farming practices with minimal environmental impact.</p>
        </motion.div>
        <motion.div 
          className="advantage-point" 
          animate={inView4 ? 'visible' : 'hidden'} 
          variants={zoomVariants} 
          ref={ref4}
        >
          <h5>User-Friendly</h5>
          <p>Easy to operate with intuitive controls and reliable performance.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
