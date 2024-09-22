import React from 'react';
import CardButtonGrid from '../../components/CardGrid/CardGrid';
import From from '../../components/Form/From';

const SocialMedia = () => {
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
        
          <h2 className="service__heading">Social Media Strategy</h2>
          <p className="text-pretty">
          Our social media strategy services are focused on helping your brand thrive in the digital landscape. We
           understand that social media is more than just posting content—it’s about building a community,
            engaging with your audience, and driving meaningful interactions. Our approach begins with
             a deep dive into your brand’s goals, target audience, and competitive landscape. We then develop
              a tailored strategy that includes content creation, platform selection, posting schedules, and 
              engagement tactics designed to maximize your reach and impact. Whether you’re looking to increase 
              brand awareness, drive traffic, or boost conversions, our strategies are data-driven and results-focused.
               We continuously monitor performance, making adjustments as needed to ensure your social media 
               efforts are aligned with your business objectives. With our expertise, your social media presence 
                will not only grow but also foster strong, lasting connections with your audience.
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
                <path d="M19.44 4.56c-3.92-3.92-10.28-3.92-14.2 0s-3.92 10.28 0 14.2a10.04 10.04 0 006.45 2.73v-2.1a7.82 7.82 0 01-5.05-1.97 7.82 7.82 0 010-11.04 7.82 7.82 0 0111.04 0 7.82 7.82 0 011.97 5.05h2.1a10.04 10.04 0 00-2.73-6.45z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mt-6">Looking for Social Media?</h3>
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
          <h3 className="service__heading">
            Processing of Service
          </h3>
          <ul className="list-decimal ml-5 space-y-2 text-pretty">
            <li>
              Initial Consultation: We begin by understanding your vision,
              goals, and the message you want to convey, ensuring a clear
              direction for the project.
            </li>
            <li>
              Footage Review & Planning: We meticulously review all provided
              footage, storyboard the project, and plan the structure, ensuring
              a coherent and engaging narrative.
            </li>
            <li>
              Editing & Assembly: Our skilled editors piece together your video,
              focusing on seamless transitions, pacing, and alignment with your
              brand’s tone and style.
            </li>
            <li>
              Enhancements & Effects: We enhance the video with color
              correction, sound design, and special effects, adding depth and
              professionalism to the final product.
            </li>
            <li>
              Client Feedback & Revisions: We share the draft with you for
              feedback, making any necessary revisions to ensure the video meets
              your expectations.
            </li>
            <li>
              Final Delivery: Once approved, we deliver the high-quality video
              in your desired formats, ready for distribution across your chosen
              platforms.
            </li>
          </ul>
        </div>

        {/* Right Get In Touch Form Section */}
  <From/>
      </div>

      {/* Cards Section */}
      <div className="mb-20">
        <CardButtonGrid />
      </div>
    </div>
  );
};



export default SocialMedia;
