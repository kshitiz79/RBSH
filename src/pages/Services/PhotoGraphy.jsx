import React from 'react';
import CardButtonGrid from '../../components/CardGrid/CardGrid';
import { Link } from 'react-router-dom';
import QuickLinks from '../../components/QuickLinks/QuickLinks';

const PhotoGraphy = () => {
  return (
    <div className="bg-white text-black">

      <div className="relative flex justify-center items-center p-4 sm:p-6">
     

        <img
          src="./services1.png"
          alt="Photography Services"
          className="w-full h-48 sm:h-[50vh] rounded object-cover"
   
        />
      </div>


      <div className="container mx-auto py-8 mt-10 px-4 sm:px-6 lg:px-24">

        <div className="flex flex-col md:flex-row">
          <QuickLinks />
     
          <div className="md:w-2/3 mt-8 md:mt-4 md:pl-8">
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed text-justify">
             
            RBSH Studio is where creativity meets strategy. From concept to execution, we bring stories to life through innovative design, engaging social media campaigns, and strategic marketing solutions tailored for modern businesses.We specialize in helping brands stand out in an ever-crowded digital landscape. Whether you’re looking to enhance your online presence, drive engagement, or increase conversions, our team at RBSH Studio has the expertise to make it happen. Let’s build something extraordinary together.
            </p>
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed mt-6 sm:mt-8 text-justify">
            Capturing Moments, Crafting Memories– At RBSH Studio, we believe every photograph tells a story. Our photography services focus on delivering high-quality, captivating visuals that highlight the essence of your brand. From corporate shoots to lifestyle photography, our team combines creativity with technical expertise to bring out the best in every shot. Let us help you showcase your brand’s unique personality through the lens. Book a session with us today and let your story shine!
            </p>
          
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mb-16 sm:mb-20 px-4 sm:px-6 lg:px-24">
   
        <CardButtonGrid />
      </div>
    </div>
  );
};

export default PhotoGraphy;
