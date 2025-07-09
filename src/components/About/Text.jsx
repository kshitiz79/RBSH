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
    className="ml-auto border-t border-b border-white px-6 py-8 overflow-hidden"
  >
    <h1 className="text-white text-[3rem] max-w-md">{title}</h1>
    <motion.p
      style={{ opacity: paragraphOpacity, y: paragraphY }}
      className="text-white max-w-2xl"
    >
      {text}
    </motion.p>
  </motion.div>
);

const Text = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"],
  });

  // height animation for all blocks
  const height = useTransform(scrollYProgress, [0, 0.5], [100, 250]);
  // staggered width per block: each expands during its own third of scroll
  const blockCount = 3;
  const widthTransforms = Array.from({ length: blockCount }).map((_, i) =>
    useTransform(
      scrollYProgress,
      [i / blockCount, (i + 1) / blockCount],
      ["50%", "100%"]
    )
  );

  // paragraph reveal tied to block height
  const paragraphOpacity = useTransform(height, [100, 300], [0, 1]);
  const paragraphY = useTransform(height, [50, 70], [20, 0]);

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
    <div ref={sectionRef} className="relative w-full">
      <section className="w-full h-screen bg-[#0A0D11] border-t border-[#0A0D11]">
        <div className="w-full h-full relative">
          {blocks.map((block, idx) => (
            <Block
              key={idx}
              title={block.title}
              text={block.text}
              height={height}
              widthTransform={widthTransforms[idx]}
              paragraphOpacity={paragraphOpacity}
              paragraphY={paragraphY}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Text;
