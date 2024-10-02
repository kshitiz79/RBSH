import React from 'react';
import CardButtonGrid from '../../components/CardGrid/CardGrid';
import { Link } from 'react-router-dom';
import QuickLinks from '../../components/QuickLinks/QuickLinks';

const LeadGeneration = () => {
  return (
    <div className="bg-white text-black">
      {/* Top Section with Image */}
      <div className="relative flex justify-center items-center p-4 sm:p-6">
        {/* Heading (Optional: Add text if needed) */}
        <h2 className="absolute text-white text-3xl font-bold text-center"></h2>
        

        <img
          src="./services4.png"
          alt="Lead Generation"
          className="w-full h-48 sm:h-[50vh] rounded object-cover"
       
        />
      </div>


      <div className="container mx-auto py-8 mt-10 px-4 sm:px-6 lg:px-24">

        <div className="flex flex-col md:flex-row">
          <QuickLinks />
  
          <div className="md:w-2/3 mt-8 md:mt-4 md:pl-8">
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed text-justify">
       
              Our lead generation and SEO services are meticulously crafted to attract high-quality traffic and convert it into valuable leads for your business. We begin by understanding your target audience and business goals, allowing us to develop a customized strategy that effectively reaches and engages potential customers. Our lead generation approach integrates compelling content, strategic calls-to-action, and optimized landing pages to guide prospects through the buyer’s journey and capture them at the right moment.
            </p>
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed mt-6 sm:mt-8 text-justify">
              We create impactful visuals that convey your brand’s identity. From digital designs to print materials, our graphic design services ensure each element is tailored to reflect your brand and engage your audience, helping you achieve your goals.
            </p>
          </div>
        </div>
      </div>


      <div className="mb-16 sm:mb-20 px-4 sm:px-6 lg:px-24">
  
        <CardButtonGrid />
      </div>
    </div>
  );
};

export default LeadGeneration;
