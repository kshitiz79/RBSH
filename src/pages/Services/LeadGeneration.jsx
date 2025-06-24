import React, { useEffect, useRef } from 'react';
import './VideoEditing.css'; // Import custom CSS for scrollbar hiding
import ServiceBanner from '../../components/ServiceBanner/ServiceBaneer';

import ImageText from './ImageText';

const LeadGeneration = () => {
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
      <ServiceBanner gradientName="green" />
      </div>

      {/* Container for the two columns */}
      <div className="flex flex-col md:flex-row flex-grow md:h-[70vh] md:px-6 h-[90vh] md:gap-20 gap-5">
        {/* Left Column: scrollable image with hidden scrollbar */}
        <div
          ref={leftColumnRef}
          className="md:w-2/5 overflow-y-auto hide-scrollbar"
        >
          <img
            src="./desktop2.webp"
            alt="Desktop"
            className="w-full h-auto"
          />
        </div>

        {/* Right Column: scrollable text with hidden scrollbar */}
        <div
          ref={rightColumnRef}
          onWheel={handleRightWheel}
          className="md:w-3/5  md:p-8 px-4 overflow-y-auto hide-scrollbar md:h-[80vh] h-[100vh] "
        >
          <p className="text-gray-700 md:text-6xl text-4xl font-lato">
          Lead Generation & Performance Marketing
          </p>
          <p className="text-gray-700 text-base sm:text-xl leading-relaxed mt-6 w-[90%] sm:mt-8 text-justify">
  Drive more leads and boost conversions with our data-driven marketing solutions.

  We specialize in targeted campaigns, SEO optimization, and strategic sales funnels designed to turn casual visitors into loyal customers.

  Our approach blends creativity with analytics, ensuring every campaign is fine-tuned for maximum reach and engagement.
  <br /><br />
  From paid advertising to organic growth strategies, we craft personalized marketing plans that align with your business goals.

  By leveraging deep data insights, performance tracking, and A/B testing, we help you optimize your marketing investments for measurable success.

  Whether you're looking to expand your online presence, improve conversion rates, or enhance customer retention, our expert team ensures that every marketing dollar delivers tangible results.
</p>

      
        </div>
      </div>
     
    </div>


     <div className=" mt-10 bg-black">
     <ImageText/>
      </div>
      </>
  );
};

export default LeadGeneration;
