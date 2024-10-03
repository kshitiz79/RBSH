import React from 'react';
import CardButtonGrid from '../../components/CardGrid/CardGrid';
import QuickLinks from '../../components/QuickLinks/QuickLinks';

const SocialMedia = () => {
  return (
    <div className="bg-white text-black">
      {/* Top Section with Image */}
      <div className="relative flex justify-center items-center p-4 sm:p-6">
    

        {/* Image */}
        <img
          src="./service7.png"
          alt="Social Media Services"
          className="w-full h-48 sm:h-[50vh] rounded object-cover"
    
        />
      </div>


      <div className="container mx-auto py-8 mt-10 px-4 sm:px-6 lg:px-24">
  
        <div className="flex flex-col md:flex-row">
          <QuickLinks />
    
          <div className="md:w-2/3 mt-8 md:mt-4 md:pl-8">
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed text-justify">
          
              Our social media strategy services are focused on helping your brand thrive in the digital landscape. We understand that social media is more than just posting content—it’s about building a community, engaging with your audience, and driving meaningful interactions. Our approach begins with a deep dive into your brand’s goals, target audience, and competitive landscape. We then develop a tailored strategy that includes content creation, platform selection, posting schedules, and engagement tactics designed to maximize your reach and impact. Whether you’re looking to increase brand awareness, drive traffic, or boost conversions, our strategies are data-driven and results-focused.
            </p>
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed mt-6 sm:mt-8">
              Contact us today to learn more about how we can help your business succeed online.
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

export default SocialMedia;
