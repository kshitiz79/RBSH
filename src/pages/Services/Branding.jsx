import React from 'react';
import CardButtonGrid from '../../components/CardGrid/CardGrid';
import From from '../../components/Form/From';

const Branding = () => {
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
        <div className="md:w-2/3 space-y-4">
          <h2 className="service__heading">Branding & Design</h2>
          <p className="text-pretty">
            
          At RBSH, we believe that branding is much more than just a logo—it's about telling your brand's story, evoking emotions, and forging a meaningful connection with your audience. Our branding services go beyond visuals; we specialize in creating unique and memorable logos that truly reflect your brand’s essence. We also focus on brand development, working closely with you to define and articulate your brand’s voice, values, and identity. By aligning these elements, we ensure your brand stands out in the marketplace, fostering long-term loyalty and recognition among your target audience. Let us help you build a powerful brand.
          </p>


         
        </div>

        {/* Right Contact Section */}
        <div className="md:w-1/3 flex flex-col items-center bg-black p-6 rounded-lg">
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-yellow-500 p-4 rounded-full">
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
          {/* Add Grid of 3 Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="./3.png"
              alt="Grid Photo 1"
              className="w-full h-auto rounded"
            />
            <img
                 src="./3.png"
              alt="Grid Photo 2"
              className="w-full h-auto rounded"
            />
            <img
                  src="./3.png"
              alt="Grid Photo 3"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="./3.png"
              alt="Grid Photo 1"
              className="w-full h-auto rounded"
            />
            <img
                 src="./3.png"
              alt="Grid Photo 2"
              className="w-full h-auto rounded"
            />
            <img
                  src="./3.png"
              alt="Grid Photo 3"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
        

        {/* Form Section */}
        <From />
      </div>

      {/* Cards Section */}
      <div className="mb-20">
        <CardButtonGrid />
      </div>
    </div>
  );
};

export default Branding;
