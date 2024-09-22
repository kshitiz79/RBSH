// components/ScrollText/ScrollText.jsx

import { motion } from 'framer-motion';


const ScrollText = () => {
  // Variants for the scrolling animation
  const scrollVariants = {
    animate: {
      x: ['100%', '-100%'], // Move from right to left
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30, // Adjust this to change the scrolling speed
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className="bg-black text-white py-7 overflow-hidden">
      <motion.div
        className="flex items-center space-x-8 whitespace-nowrap"
        variants={scrollVariants}
        animate="animate"
      >
        {/* Repeating set of information */}
        {Array(3).fill(
          <div className="flex items-center space-x-4">
            <span className="text-xl flex items-center">
              <span className="font-semibold text-yellow-500"> *</span>Create
              <i className="fas fa-star-of-life text-yellow-500 mx-2"></i>
            </span>
            <span className="text-xl flex items-center">
              <span className="font-semibold text-yellow-500">*</span>Innovate

              <i className="fas fa-star-of-life text-yellow-500 mx-2"></i>
            </span>

            <span className="text-xl flex items-center">
              <span className="font-semibold text-yellow-500">* </span>Grow
              <i className="fas fa-star-of-life text-yellow-500 mx-2"></i>
            </span>
            <span className="text-xl flex items-center">
              <span className="font-semibold text-yellow-500">*</span>Succeed
              <i className="fas fa-star-of-life text-yellow-500 mx-2"></i>
            </span>
            <span className="text-xl flex items-center">
              <span className="font-semibold text-yellow-500">*</span>Build
              <i className="fas fa-star-of-life text-yellow-500 mx-2"></i>
            </span>
            <span className="text-xl flex items-center">
              <span className="font-semibold text-yellow-500">*</span>Trend

            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ScrollText;
