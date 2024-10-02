import React from 'react';
import CardButtonGrid from '../../components/CardGrid/CardGrid';
import QuickLinks from '../../components/QuickLinks/QuickLinks';

const VideoEditing = () => {
  return (
    <div className="bg-white text-black">
      {/* Top Section with Image */}
      <div className="relative flex justify-center items-center p-4 sm:p-6">
  
        <img
          src="./services2.png"
          alt="Video Editing Services"
          className="w-full h-48 sm:h-[50vh] rounded object-cover"
       
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-8 mt-10 px-4 sm:px-6 lg:px-24">
    
        <div className="flex flex-col md:flex-row">
          <QuickLinks />
        
          <div className="md:w-2/3 mt-8 md:mt-4 md:pl-8">
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed">
           
              We turn raw footage into captivating visuals for promos, corporate, social media, and animated content.
            </p>
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed mt-6 sm:mt-8 text-justify">
              Our video editing services are designed to bring your vision to life with precision & creativity. We understand that video content is a powerful tool for storytelling, and our team is committed to crafting videos that not only captivate but also convey your message effectively. From the initial cut to the final polish, we pay close attention to every detail—ensuring seamless transitions, perfect pacing, and a cohesive narrative that resonates with your audience. Whether it’s a promotional video, a corporate presentation, or a social media campaign, we tailor our editing process to match the tone and style of your brand. 
            </p>
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed mt-6 sm:mt-8">
              Contact us today to learn more about how we can help your business succeed online.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mb-16 sm:mb-20 px-4 sm:px-6 lg:px-24">
        {/*
          - Added responsive padding to match the container
          - Ensure spacing is consistent across different screen sizes
        */}
        <CardButtonGrid />
      </div>
    </div>
  );
};

export default VideoEditing;
