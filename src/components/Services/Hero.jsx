import React from 'react';
import { IoArrowDownCircleOutline } from "react-icons/io5";



import { IoArrowDownOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <section className="bg-[#e5e8ea] h-[90vh] pt-12">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <h1 className="text-6xl md:text-[20rem] font-bold text-gray-900 mb-12">
          <img src="https://atolldigital.com/wp-content/uploads/2025/01/title-services.svg" alt="" />
        </h1>

        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-12 md:w-[60%] mx-auto mt-60">
          {/* Logo/Icon */}
          <div className="flex-shrink-0">
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-gray-900 flex items-center justify-center">
              {/* Replace with your actual logo if available */}
              <span className="text-2xl md:text-3xl font-bold text-gray-900"><IoArrowDownOutline /></span>
            </div>
          </div>

          {/* Description Text */}
          <p className="text-gray-900 text-lg md:text-2xl max-w-lg">
          Our services blend strategy, design, and technology to bring brands to life. From digital platforms to bold identities and growth-driven solutions—we help ideas scale with clarity and impact.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
