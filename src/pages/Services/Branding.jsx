import React, { useRef, useEffect } from 'react';
import './VideoEditing.css'; // Import custom CSS for scrollbar hiding
import ServiceBanner from '../../components/ServiceBanner/ServiceBaneer';
import ImageText from './ImageText';

const Branding = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  // Ensure both scrollable columns and the window scroll are at the top on mount
  useEffect(() => {
    if (leftColumnRef.current) leftColumnRef.current.scrollTop = 0;
    if (rightColumnRef.current) rightColumnRef.current.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  // Handler for left column (image) scrolling
  const handleLeftWheel = (e) => {
    e.preventDefault();
    const left = leftColumnRef.current;
    const right = rightColumnRef.current;

    if (e.deltaY > 0) { // Scrolling down
      if (left.scrollTop < left.scrollHeight - left.clientHeight) {
        // Scroll left column first
        left.scrollTop += e.deltaY;
      } else if (right.scrollTop < right.scrollHeight - right.clientHeight) {
        // Then scroll right column
        right.scrollTop += e.deltaY;
      }
      // Page will only scroll naturally after both are fully scrolled
    } else { // Scrolling up
      if (right.scrollTop > 0) {
        // Scroll right column up first
        right.scrollTop += e.deltaY;
      } else if (left.scrollTop > 0) {
        // Then scroll left column up
        left.scrollTop += e.deltaY;
      }
    }
  };

  // Handler for right column (text) scrolling
  const handleRightWheel = (e) => {
    e.preventDefault();
    const left = leftColumnRef.current;
    const right = rightColumnRef.current;

    if (e.deltaY > 0) {
      if (left.scrollTop < left.scrollHeight - left.clientHeight) {
        left.scrollTop += e.deltaY;
      } else if (right.scrollTop < right.scrollHeight - right.clientHeight) {
        right.scrollTop += e.deltaY;
      }
    } else {
      if (right.scrollTop > 0) {
        right.scrollTop += e.deltaY;
      } else if (left.scrollTop > 0) {
        left.scrollTop += e.deltaY;
      }
    }
  };

  return (
    <>
      <div className="bg-white text-black flex flex-col">
        <div className="relative flex justify-center items-center p-4 sm:p-6 hidden md:block">
          <ServiceBanner gradientName="orange" />
        </div>
        <div className="flex flex-col md:flex-row flex-grow md:h-[70vh] md:px-6 h-[90vh] md:gap-20 gap-5">
          <div
            ref={leftColumnRef}
            onWheel={handleLeftWheel}
            className="md:w-2/5 overflow-y-auto hide-scrollbar"
          >
            <img
              src="./desktop1.webp"
              alt="Desktop"
              className="w-full h-auto"
            />
          </div>
          <div
            ref={rightColumnRef}
            onWheel={handleRightWheel}
            className="md:w-3/5 md:p-8 px-4 overflow-y-auto hide-scrollbar md:h-[80vh] h-[100vh]"
          >
            <p className="text-gray-700 md:text-6xl text-4xl font-lato">
              Impactful Branding & Identity Design
            </p>
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed mt-6 w-[90%] sm:mt-8 text-justify">
              Your brand is more than just a logo—it’s an experience.
              <br /><br />
              We craft a unique brand identity that not only reflects your values but also resonates with your target audience.
              <br /><br />
              Our approach goes beyond mere visuals; we develop comprehensive brand strategies that ensure consistency across all platforms.
              <br /><br />
              From logo design to complete brand architecture, we create a memorable presence that sets you apart in a crowded market.
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-10 bg-black">
        <ImageText />
      </div>
    </>
  );
};

export default Branding;
