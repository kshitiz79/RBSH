import React, { useEffect, useRef } from 'react';
import './VideoEditing.css'; // Import custom CSS for scrollbar hiding
import ServiceBanner from '../../components/ServiceBanner/ServiceBaneer';

import ImageText from './ImageText';

const SocialMedia = () => {
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
      <ServiceBanner gradientName="yellow" />
      </div>

      {/* Container for the two columns */}
      <div className="flex flex-col md:flex-row flex-grow md:h-[70vh] md:px-6 h-[90vh] md:gap-20 gap-5">
        {/* Left Column: scrollable image with hidden scrollbar */}
        <div
          ref={leftColumnRef}
          className="md:w-2/5 overflow-y-auto hide-scrollbar"
        >
          <img
            src="./desktop4.webp"
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
          Strategic Social Media Marketing
          </p>
          <p className="text-gray-700 text-base sm:text-xl leading-relaxed mt-6 w-[90%] sm:mt-8 text-justify"> Maximize your brand's reach with our expert social media strategies. We create compelling content, manage your accounts, and run targeted ad campaigns to enhance engagement and drive business growth. From Instagram reels to LinkedIn marketing, we ensure your brand stays relevant and connects effectively with your audience. </p>
        </div>
      </div>
     
    </div>


    <div className=" mt-10 bg-black">
     <ImageText/>
      </div>
      </>
  );
};






export default SocialMedia;
