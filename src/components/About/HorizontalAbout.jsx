"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalAboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-[#e5e8ea]">
      {/* Sticky horizontal scroll wrapper */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Horizontal Scrollable Area */}
        <motion.div
          style={{ x: translateX }}
          className="flex h-screen w-[200vw]" // Full screen height!
        >
          {/* Left Section - 70% of viewport width */}
          <div className="w-[70vw] h-screen flex items-center justify-center px-10 bg-[#e5e8ea]">
            <h1 className="text-6xl font-bold text-[#0A0D11]">About</h1>
          </div>

          {/* Right Section - Full screen width */}
          <div className="w-[100vw] h-screen flex flex-col border-l border-[#0A0D11] bg-[#e5e8ea]">
            {/* Video (40vh) */}
            <div className="w-full h-[40vh] shrink-0">
              <video
                src="/ABOUTUS.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Heading (40vh) */}
            <div className="w-full h-[40vh] shrink-0 flex items-center justify-center px-6">
              <h2 className="text-3xl font-semibold text-center text-[#0A0D11]">
                Creative Montreal Web Agency
              </h2>
            </div>

            {/* Paragraph (40vh) */}
            <div className="w-full h-[40vh] shrink-0 flex items-center justify-center px-6">
              <p className="text-base text-center text-[#0A0D11] max-w-xl leading-relaxed">
                We're a tight-knit and agile Montreal web agency ready to tackle
                projects of any size, even for the biggest brands out there.
                We’re skilled at creating websites that make your audience choose
                your business over the competition.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalAboutSection;
