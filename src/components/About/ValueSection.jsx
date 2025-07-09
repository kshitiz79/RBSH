"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// import { motion, useAnimation, useInView } from "framer-motion";

const ValuesSection = () => {
  const phrases = ["We Brainstorm.", "We Create.", "We Deliver."];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const h1Ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 700);
    return () => clearInterval(interval);
  }, [phrases.length]);

  useEffect(() => {
    if (!h1Ref.current) return;
    const letters = h1Ref.current.querySelectorAll(".letter");
    gsap.set(letters, { opacity: 1 });
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });

    tl.to(letters, {
      duration: 0.05,
      opacity: 0,
      stagger: { each: 0.05, from: "end", ease: "none" },
    });
    tl.to(
      letters,
      {
        duration: 0.05,
        opacity: 1,
        stagger: { each: 0.05, from: "start", ease: "none" },
      },
      ">"
    );

    return () => tl.kill();
  }, []);

//   const valueItems = [
//     {
//       heading: "What we Create",
//       paragraph:
//         "We craft innovative solutions that blend design, technology, and purpose. From intuitive user interfaces to immersive digital experiences, our creations are centered around value and impact.",
//     },
//     {
//       heading: "What we Brainstorm",
//       paragraph:
//         "We think beyond the brief. From brand storytelling and UI/UX concepts to digital campaigns and tech stacks, our brainstorming sessions explore what works, what resonates, and what’s next.",
//     },
//     {
//       heading: "What we Deliver",
//       paragraph:
//         "We bring visions to life with precision, scalability, and a deep focus on real-world impact across every digital channel.",
//     },
//   ];

  return (
    <section className="relative bg-[#0A0D11] text-white min-h-screen px-6 md:px-20 overflow-hidden">
      <h1
        ref={h1Ref}
        className="top-0 left-0 text-[8rem] md:text-[11rem] font-bold text-[#E6E8EA] leading-none -z-10 tracking-tight select-none"
      >
        {phrases[currentPhraseIndex]}
      </h1>

      <div className="relative z-10 max-w-2xl ml-auto mt-32">
        {/* Description Block */}
        <div className="flex items-start gap-8 ">
          <img
            src="https://atolldigital.com/wp-content/uploads/2025/01/force-icon.svg"
            alt="Icon"
            className="w-32"
          />
          <p className="text-xl text-[#E6E8EA] leading-snug max-w-lg">
            Our passionate team of creatives thrives on collaboration and
            innovation. We blend artistic vision with strategic insight,
            ensuring that every campaign reflects the authentic essence of your
            brand.
          </p>
        </div>
        

        {/* Border → Heading → Paragraphs */}
        {/* <div className="space-y-24">
          {valueItems.map((item, idx) => (
            <ValueItemBlock
              key={idx}
              heading={item.heading}
              paragraph={item.paragraph}
            />
          ))}

      
          <motion.div
            className="h-[1px] bg-[#E6E8EA]"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div> */}
      </div>
    </section>
  );
};

// const ValueItemBlock = ({ heading, paragraph }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [isInView, controls]);

//   return (
//     <div ref={ref} className="overflow-hidden">
//       {/* Top Border */}
//       <motion.div
//         className="h-[1px] bg-[#E6E8EA] mb-6"
//         initial={{ width: "0%" }}
//         animate={controls}
//         variants={{
//           visible: {
//             width: "100%",
//             transition: { duration: 0.8, ease: "easeInOut" },
//           },
//         }}
//       />

//       {/* Heading (Always visible) */}
//       <h2 className="text-2xl md:text-3xl font-semibold text-white">
//         {heading}
//       </h2>

//       {/* Paragraph (only rendered when in view) */}
//       {isInView && (
//         <motion.p
//           className="text-base md:text-lg text-[#B0B6BE] mt-4 max-w-md"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
//         >
//           {paragraph}
//         </motion.p>
//       )}
//     </div>
//   );
// };

export default ValuesSection;
