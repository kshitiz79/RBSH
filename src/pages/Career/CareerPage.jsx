"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = ["/careerpage2.png", "/careerpage1.png", "/careerpage3.png"];

const CareerPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(images.length - 2) * 100}%`]
  );

  return (
    <section
      className="relative w-full h-[200vh] bg-[#e5e8ea]"
      ref={containerRef}
    >
      {/* Sticky Area */}
      <div className="fixed top-0 left-0 w-full h-screen flex overflow-hidden z-10">
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
        <div className="w-[70%] p-8 flex flex-col bg-[#e5e8ea]">
          {/* Top Title */}
          <div className="h-[40%] flex items-center pt-20">
            <img src="/careerfont.png" alt="" />
          </div>

          {/* Scrolling Image Cards */}
          <div className="pt-20 " />
          <div className="h-[60%] overflow-hidden relative">
            <motion.div
              className="flex gap-8 absolute bottom-0 left-0 h-full"
              style={{ x }}
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className="w-[700px] min-w-[600px] h-full overflow-hidden -mb-20 "
                >
                  <img
                    src={src}
                    alt={`card-${index + 1}`}
                    className="w-full h-full cover -mb-10"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPage;
