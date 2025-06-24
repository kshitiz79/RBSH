import React, { useEffect, useRef } from 'react';
import './VideoEditing.css'; // Import custom CSS for scrollbar hiding
import ServiceBanner from '../../components/ServiceBanner/ServiceBaneer';

import ImageText from './ImageText';

const WebDesign = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);


  useEffect(() => {
    if (leftColumnRef.current) leftColumnRef.current.scrollTop = 0;
    if (rightColumnRef.current) rightColumnRef.current.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);


  // Intercept wheel events on the text column and scroll both columns.
  const handleRightWheel = (e) => {
    // Prevent the default behavior for the text column itself.
    e.preventDefault();
    if (leftColumnRef.current && rightColumnRef.current) {
      leftColumnRef.current.scrollTop += e.deltaY;
      rightColumnRef.current.scrollTop += e.deltaY;
    }
  };

  return (
    <>
    <div className="bg-white text-black flex flex-col">
      {/* Top Section with Image */}
      <div className="relative flex justify-center items-center p-4 sm:p-6 hidden md:block">
      <ServiceBanner gradientName="pink" />
      </div>

      {/* Container for the two columns */}
      <div className="flex flex-col md:flex-row flex-grow md:h-[70vh] md:px-6 h-[100vh] md:gap-20 gap-5">
        {/* Left Column: scrollable image with hidden scrollbar */}
        <div
          ref={leftColumnRef}
          className="md:w-2/5 overflow-y-auto hide-scrollbar"
        >
          <img
            src="./desktop3.webp"
            alt="Desktop"
            className="w-full h-auto"
          />
        </div>

        {/* Right Column: scrollable text with hidden scrollbar */}
        <div
          ref={rightColumnRef}
          onWheel={handleRightWheel}
          className="md:w-3/5  md:p-8 px-4 overflow-y-auto hide-scrollbar h-[80vh] "
        >
          <p className="text-gray-700 md:text-6xl text-4xl font-lato">
          Cutting-Edge Web Design & Development
          </p>
          <p className="text-gray-700 text-base sm:text-xl leading-relaxed mt-6 w-[90%] sm:mt-8 text-justify">
  Your website is the digital face of your brand, and we ensure it leaves a lasting impression by blending innovative design with robust functionality.

  Our web design and development services are crafted to deliver modern, responsive, and high-performance websites that are meticulously tailored to your business needs.
  <br /><br />
  We seamlessly merge aesthetics with functionality to create an intuitive user experience that not only enhances engagement but also drives conversions.
  <br />
  Every project is a unique collaboration, where creative vision and technical expertise come together to build an online presence that sets you apart in today’s competitive digital landscape.
</p>

        </div>
      </div>
     
    </div>


    <div className="mt-10 bg-black ">
  <ImageText />
</div>

      </>
  );
};



export default WebDesign;
