import React from 'react';
import CardButtonGrid from '../../components/CardGrid/CardGrid';
import From from '../../components/Form/From';

const VideoEditingPage = () => {
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
      <div className="flex flex-col md:flex-row p-6 gap-6">
        {/* Left Text Section */}
        <div className="md:w-2/3 space-y-4">
        
          <h2 className="service__heading">Video Editing</h2>
          <p className="text-pretty">
            We turn raw footage into captivating visuals for promos, corporate,
            social media, and animated content.
          </p>
          <p className="text-pretty">
            Our video editing services are designed to bring your vision to life
            with precision & creativity. We understand that video content is a
            powerful tool for storytelling, and our team is committed to
            crafting videos that not only captivate but also convey your message
            effectively. From the initial cut to the final polish, we pay close
            attention to every detail—ensuring seamless transitions, perfect
            pacing, and a cohesive narrative that resonates with your audience.
            Whether it’s a promotional video, a corporate presentation, or a
            social media campaign, we tailor our editing process to match the
            tone and style of your brand.
          </p>
        </div>

        {/* Right Contact Section */}
        <div className="md:w-1/3 flex flex-col items-center bg-black p-6 rounded-lg">
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-yellow-500  p-4 rounded-full">
              <svg
                className="h-8 w-8 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
               
              </svg>
            </div>
            <h3 className="text-2xl font-bold mt-6">Looking for Video  Editing?</h3>
            <button className="bg-yellow-500 text-black py-2 px-4 w-48 rounded-full">
              +91 92043 09173
            </button>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="flex flex-col md:flex-row p-6 gap-6">
        {/* Left Video Section */}
        <div className="md:w-2/3 space-y-4">
          {/* Video 1 */}
          <div className="w-full">
            <iframe
              className="w-full h-[25.5rem] rounded"
              src="https://www.youtube.com/embed/zWkTaXCwkUc"
              title="Video Editing Example"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Get In Touch Form Section */}
        <From />
      </div>

      {/* Cards Section */}
      <div className="mb-20">
        <CardButtonGrid />
      </div>
    </div>
  );
};

export default VideoEditingPage;
