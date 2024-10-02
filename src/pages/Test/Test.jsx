// src/components/Test.jsx
import React, { useEffect, useState } from "react";

/**
 * Test Component
 * Combines the Red Section with Rotating Paragraphs and an Image-Text Section.
 */
const Test = () => {
  // State for Rotating Paragraphs
  const [currentPara, setCurrentPara] = useState(0);

  // Array of paragraphs to rotate
  const paragraphs = [
    "We get it, numbers matter. But in a digital world full of vague, self-important numbers, how can anyone rise above the noise and stand out?",
    "So we do things differently. Using a combination of instinct, technology, and experience—our focus is on creating digital stories.",
    "Engaging experiences that not only drive people to your brand but convert leads into believers.",
  ];

  // Effect to handle paragraph rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPara((prev) => (prev + 1) % paragraphs.length);
    }, 5000); // Change paragraph every 5 seconds

    return () => clearInterval(interval);
  }, [paragraphs.length]);

  return (
    <>
      {/* Red Section with Static and Rotating Paragraphs */}
      <div className="relative bg-red-700 text-white text-4xl h-screen flex flex-col justify-between">
        {/* Top Static Paragraphs */}
        <div className="p-10 space-y-2">
          <p>Open your eyes to a new way.</p>
          <p>
            We build visually. <strong>Put feelings over numbers.</strong>
          </p>
          <p>Stay small on purpose. And deliver like clockwork.</p>
        </div>

        {/* Rotating Paragraphs at the Bottom */}
        <div className="p-10 w-full bg-red-700">
          <div className="relative h-20">
            {paragraphs.map((para, index) => (
              <p
                key={index}
                className={`absolute w-full transition-opacity duration-1000 ${
                  currentPara === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Image-Text Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="mb-6 text-gray-700 ">
              We offer innovative digital solutions that help your business grow and stand out in the competitive market. Let us help you create compelling stories that resonate with your audience.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <img
              src="https://via.placeholder.com/600x400" // Replace with your image URL
              alt="Innovative Solutions"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
        </div>
      </section>

 
  
    </>
  );
};

export default Test;
