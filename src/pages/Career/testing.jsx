"use client";

import { useRef } from "react";

const Testing = () => {
  const containerRef = useRef(null);

  const items = [
    { id: 1, src: "/image.png", alt: "Instagram post #1" },
    { id: 2, src: "/image1.png", alt: "Instagram post #2" },
    { id: 3, src: "/image2.png", alt: "Instagram post #3" },
    { id: 4, src: "/image3.png", alt: "Instagram post #4" },
    { id: 5, src: "/image4.png", alt: "Instagram post #5" },

  ];

  return (
    <section
      className="relative w-full h-[100vh] bg-[#e5e8ea]"
      ref={containerRef}
    >
      {/* Sticky Area */}
      <div className="sticky top-0 left-0 w-full h-screen flex overflow-hidden z-10">
        {/* Left Video */}
        <div className="w-[30%] relative h-full">
          <video
            src="/videoblog.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover rounded-l-xl"
          />
        </div>

        {/* Right Side */}
        <div className="w-[70%] p-8 flex flex-col bg-[#e5e8ea] px-20">
          {/* Title */}
          <div className="flex items-center pt-10">
            <h1 className="text-4xl font-semibold">
              What sets RBSH Studio Private Limited apart
            </h1>
          </div>

          {/* Description */}
          <div className="mt-6">
            <p className="text-xl text-gray-700">
              It’s not just the work we do — it’s how we do it. At RBSH Studio,
              creativity isn’t confined to a department; it’s the foundation of
              everything we build. We foster a culture where ideas are heard,
              roles are flexible, and growth is continuous. Whether you're
              directing a shoot, designing a brand, or writing a pitch — you’re
              trusted to take ownership and push boundaries.
            </p>
          </div>

          {/* Instagram Scroll Cards */}
          <div className="w-full bg-[#e5e8ea] py-10 overflow-hidden">
            <div
              className="flex gap-6 animate-scroll"
              style={{
                width: "max-content",
                animation: "scrollLeft 10s linear infinite",
              }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className="w-[40vh] h-[60vh] bg-white border rounded-xl shadow-md overflow-hidden flex flex-col items-center justify-center"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full cover"
                  />
                  <div className="p-3 text-center text-sm text-gray-700">
                    {item.alt}
                  </div>
                </div>
              ))}
            </div>

            {/* Keyframe Styles */}
            <style>{`
              @keyframes scrollLeft {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;
