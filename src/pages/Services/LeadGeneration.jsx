import React from 'react';
import CardButtonGrid from '../../components/CardGrid/CardGrid';
import From from '../../components/Form/From';

const LeadGeneration = () => {
  return (
    <div className="bg-white text-black">
      {/* Top Section with Three Images */}
      <div className="flex justify-center items-center gap-4 p-6">
        <img
          src="https://rbshstudio.com/wp-content/uploads/2024/08/video-editing-1.png"
          alt="Editing 1"
          className="w-1/3 h-auto rounded"
        />
        <img
          src="https://rbshstudio.com/wp-content/uploads/2024/08/video-editing-2.png"
          alt="Editing 2"
          className="w-1/3 h-auto rounded"
        />
        <img
          src="https://rbshstudio.com/wp-content/uploads/2024/08/video-editing-3.png"
          alt="Editing 3"
          className="w-1/3 h-auto rounded"
        />
      </div>



      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row p-6 gap-6 font-lato">
        {/* Left Text Section */}
        <div className="md:w-2/3 space-y-5"> {/* Increased gap by changing space-y-4 to space-y-6 */}
          <h2 className="service__heading mt-10">Lead Generation & SEO</h2> {/* Added margin-top for more space */}
          
          <p className="text-pretty mb-10">
          Our lead generation and SEO services are meticulously crafted to attract high-quality traffic and convert it into valuable leads for your business. We begin by understanding your target audience and business goals, allowing us to develop a customized strategy that effectively reaches and engages potential customers. Our lead generation approach integrates compelling content, strategic calls-to-action, and optimized landing pages to guide prospects through the buyer’s journey and capture them at the right moment.
          </p>

          <h2 className="service__heading mt-20">SEO</h2> {/* Increased margin-top for more space */}
          
          <p className="text-pretty">
          On the SEO side, we focus on enhancing your website’s visibility in search engines by implementing a comprehensive strategy that includes keyword research, on-page optimization, technical SEO, and authoritative link-building. We ensure your website ranks well for relevant search terms, driving organic traffic that’s more likely to convert. 


          </p>
        </div>

        {/* Right Contact Section */}
        <div className="md:w-1/3 flex flex-col items-center bg-black p-6 rounded-lg">
          <div className="flex flex-col items-center space-y-4 ">
            <div className="bg-yellow-500 p-4 rounded-full ">
              <svg
                className="h-8 w-8 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.44 4.56c-3.92-3.92-10.28-3.92-14.2 0s-3.92 10.28 0 14.2a10.04 10.04 0 006.45 2.73v-2.1a7.82 7.82 0 01-5.05-1.97 7.82 7.82 0 010-11.04 7.82 7.82 0 0111.04 0 7.82 7.82 0 011.97 5.05h2.1a10.04 10.04 0 00-2.73-6.45z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mt-6">Looking for Video Editing?</h3>
            <button className="bg-yellow-500 text-black py-2 px-4 w-48 rounded-full">
              +91 92043 09173
            </button>
          </div>
          
         
        </div>
      </div>

      {/* Processing of Service and Form Section */}
      <div className="flex flex-col md:flex-row p-6 gap-6">
        {/* Left Processing of Service Section */}
        <div className="md:w-2/3 space-y-4">
    
      
         
        </div>


       <From/>
        
      </div>

      <div className='mb-20'>
      <CardButtonGrid/>
      </div>
    
    </div>
  );
};

export default LeadGeneration;
