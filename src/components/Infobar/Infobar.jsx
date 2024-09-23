import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ScrollText = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;
    const width = element.scrollWidth;
    
    gsap.to(element, {
      x: -width,
      duration: 19, // Adjust the duration to control speed
      repeat: -1,   // Infinite loop
      ease: 'linear',
      modifiers: {
        x: gsap.utils.unitize(value => parseFloat(value) % width) // Smooth looping
      }
    });
  }, []);

  return (
    <div className="bg-black text-white py-7 overflow-hidden relative">
      <div
        ref={scrollRef}
        className="flex items-center space-x-8 whitespace-nowrap"
      >
        {/* Repeating set of information */}
        {Array(11).fill(
          <div className="flex items-center space-x-4">
            <span className="text-xl flex items-center">
              <span className="font-semibold text-yellow-500"></span>Create
              <i className="fas fa-star-of-life text-yellow-500 mx-2"></i>
            </span>
            <span className="text-xl flex items-center">
              <span className="font-semibold text-yellow-500"></span>Innovate
              <i className="fas fa-star-of-life text-yellow-500 mx-2"></i>
            </span>

            <span className="text-xl flex items-center">
              <span className="font-semibold text-yellow-500"> </span>Grow
              <i className="fas fa-star-of-life text-yellow-500 mx-2"></i>
            </span>
            <span className="text-xl flex items-center">
              <span className="font-semibold text-yellow-500"></span>Succeed
              <i className="fas fa-star-of-life text-yellow-500 mx-2"></i>
            </span>
            <span className="text-xl flex items-center">
              <span className="font-semibold text-yellow-500"></span>Build
              <i className="fas fa-star-of-life text-yellow-500 mx-2"></i>
            </span>
            <span className="text-xl flex items-center">
              <span className="font-semibold text-yellow-500"></span>Trend
              <i className="fas fa-star-of-life text-yellow-500 mx-2"></i>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollText;
