"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoArrowDownOutline } from "react-icons/io5";

// Single Service Block
const Block = ({
  title,
  text,
  image,
  height,
  widthTransform,
  bwidthTransform,
  paragraphOpacity,
  paragraphY,
  imageWidth,
}) => {
  return (
    <>
      <motion.div
        className="absolute w-full top-0 right-0 h-[1px] bg-black origin-right"
   
      />

    <motion.div
      style={{ height, width: widthTransform }}
      className="ml-auto px-8 py-8 relative"
    >
      {/* Border appears first */}
      <motion.div
        className="absolute top-0 right-0 h-[1px] bg-black origin-right"
        style={{ width: bwidthTransform }}
      />

      {/* Content appears after */}
      <motion.div
        className="absolute inset-0 flex flex-row px-4 gap-40 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Title */}
        <div className="w-[35%] text-left">
          <h1 className="text-black text-[32px] md:text-[2.77vw] leading-none font-semibold pt-4 max-w-5xl">
            {title}
          </h1>
        </div>

        {/* Image */}
        <motion.div
          className="w-[35%] h-[240px] rounded-md flex items-center justify-center pt-4 flex-shrink-0"
          style={{ width: imageWidth }}
        >
          <img
            src={image}
            alt={title}
            className="w-[120vh] h-full object-cover"
          />
        </motion.div>

        {/* Paragraph */}
        <motion.div
          className="w-[40%] pt-4 overflow-hidden"
          style={{
            opacity: paragraphOpacity,
            y: paragraphY,
          }}
        >
          <p className="text-black text-lg">{text}</p>
        </motion.div>
      </motion.div>
    </motion.div>
    </>
  );

};

// Main Component
const ExpertiseSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"],
  });

  const blockCount = 10;

  // Width of each block container
  const widthTransforms = Array.from({ length: blockCount }).map((_, i) =>
    useTransform(
      scrollYProgress,
      [i / blockCount, (i + 1) / blockCount],
      ["30%", "100%"],
      { clamp: true }
    )
  );

  // ✅ Border animates first
  const bwidthTransforms = Array.from({ length: blockCount }).map((_, i) =>
    useTransform(
      scrollYProgress,
      [(i + 0.1) / blockCount, (i + 0.3) / blockCount],
      ["100%", "120%"],
      { clamp: true }
    )
  );

  // Content appears after border
  const paragraphOpacitys = Array.from({ length: blockCount }).map((_, i) =>
    useTransform(
      scrollYProgress,
      [(i + 0.3) / blockCount, (i + 0.5) / blockCount],
      [0, 1],
      { clamp: true }
    )
  );

  const paragraphYs = Array.from({ length: blockCount }).map((_, i) =>
    useTransform(
      scrollYProgress,
      [(i + 0.3) / blockCount, (i + 0.5) / blockCount],
      [20, 0],
      { clamp: true }
    )
  );

  // Constant height
  const heights = Array.from({ length: blockCount }).map(() =>
    useTransform(scrollYProgress, [0, 1], [272, 272])
  );

  // Image width animation
  const imageWidth = Array.from({ length: blockCount }).map((_, i) =>
    useTransform(
      scrollYProgress,
      [i / blockCount, (i + 1) / blockCount],
      [155, 450],
      { clamp: true }
    )
  );

  // Content blocks
  const blocks = [
    {
      title: "Web/App Development",
      image: "/service/1.png",
      text: "Your website is your brand’s digital face—we make sure it impresses. Our modern, responsive sites blend design and performance to deliver seamless user experiences that engage and convert. Each build is a custom mix of creativity and tech, made to stand out.",
    },
 
  

  ];

  return (
    <>
      {/* Intro Section */}
      {/* <section className="bg-[#e5e8ea] h-[90vh] pt-12 relative">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl md:text-[6rem] font-bold text-gray-900 mb-8">
          Trending Now
          </h1>

        </div>
      </section> */}

      {/* Scroll-Aware Animated Blocks */}
      <div ref={sectionRef} className="relative w-full h-screen bg-[#e5e8ea] ">
        <section className="w-full h-screen bg-[#e5e8ea]">
          <div className="w-full h-full relative">
            {blocks.map((block, idx) => (
              <Block
                key={idx}
                title={block.title}
                text={block.text}
                image={block.image}
                height={heights[idx]}
                widthTransform={widthTransforms[idx]}
                bwidthTransform={bwidthTransforms[idx]}
                paragraphOpacity={paragraphOpacitys[idx]}
                paragraphY={paragraphYs[idx]}
                imageWidth={imageWidth[idx]}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ExpertiseSection;
