"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Single Block component now anchors right via `ml-auto` so width expands leftwards
const Block = ({
  title,
  text,
  height,
  widthTransform,
  paragraphOpacity,
  paragraphY,
}) => (
  <motion.div
    style={{ height, width: widthTransform }}
    className="ml-auto border-b border-t h-[1px] border-white px-0 py-8 overflow-hidden relative text-left"
  >
   
    {/* Full container */}
    <div className="absolute inset-0 flex flex-col text-left justify-between items-end px-6" >
      {/* Title stays near the top */}
      <div className="text-left max-w-xl pt-4 md:-ml-20 md:mr-40">
        <h1 className="text-white text-[3rem] max-w-xl text-left" >{title}</h1>
      </div>

      {/* Paragraph is anchored to the bottom */}
      <motion.p
        style={{ opacity: paragraphOpacity, y: paragraphY }}
        className="text-white text-left max-w-xl mr-20 pb-4"
      >
        {text}
      </motion.p>
    </div>
  </motion.div>
);

const Text = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"],
  });

  const blockCount = 7;

  // For each block, map scroll progress range so that animation is sequential:
  // Each block animates when scrollYProgress is between i/blockCount and (i+1)/blockCount
  const widthTransforms = Array.from({ length: blockCount }).map((_, i) =>
    useTransform(
      scrollYProgress,
      [i / blockCount, (i + 1) / blockCount],
      ["70%", "100%"],
      { clamp: true }
    )
  );

  const heights = Array.from({ length: blockCount }).map((_, i) =>
    useTransform(
      scrollYProgress,
      [i / blockCount, (i + 1) / blockCount],
      [100, 290],
      { clamp: true }
    )
  );

  // Paragraph animations per block tied to their height values
  const paragraphOpacitys = heights.map(height =>
    useTransform(height, [100, 200], [0, 1])
  );

  const paragraphYs = heights.map(height =>
    useTransform(height, [50, 70], [20, 0])
  );

  const blocks = [
    {
      title: "What we create",
      text: "We craft engaging digital experiences—from websites and apps to brand identities, motion graphics, and videos. Every creation blends creativity, tech, and strategy to help brands stand out and connect meaningfully.",
    },
    {
      title: "What we brainstorm",
      text: "We think beyond the brief. From brand storytelling and UI/UX concepts to digital campaigns and tech stacks, our brainstorming sessions explore what works, what resonates, and what’s next.",
    },
    {
      title: "What we deliver",
      text: "We deliver clean, scalable, and growth-ready digital solutions—fast-loading websites, standout branding, and high-performing campaigns. Everything we build is designed for real-world impact.",
    },
  ];

  return (
    <div ref={sectionRef} className="relative w-full md:h-[130vh] h-[110vh] py-12 bg-[#0A0D11]">
      <section className="w-full h-screen bg-[#0A0D11] border-[#0A0D11]">
        <div className="w-full h-full relative">
          {blocks.map((block, idx) => (
            <Block
              key={idx}
              title={block.title}
              text={block.text}
              height={heights[idx]}
              widthTransform={widthTransforms[idx]}
              paragraphOpacity={paragraphOpacitys[idx]}
              paragraphY={paragraphYs[idx]}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Text;
