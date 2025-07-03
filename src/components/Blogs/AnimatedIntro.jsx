"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpandingCards from "./ExpandingCards";

const words = ["GOOD", "IS", "THE", "NEW COOL"];

export default function AnimatedIntro() {
  const [stage, setStage] = useState("start"); // "start" → "center" → "image"

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("center"), 2000),  // move to center
      setTimeout(() => setStage("image"), 4000),   // show image
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Words */}
      <AnimatePresence>
  {stage !== "image" && (
    <motion.div
      key="words"
      className={`absolute inset-0 px-10 text-4xl font-bold tracking-widest flex ${
        stage === "start" ? "flex-row justify-between items-center" : "flex-row justify-center items-center gap-2"
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
    >
      {words.map((word, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          {word}
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>


      {/* Image Section */}
      <AnimatePresence>
        {stage === "image" && (
          <motion.div
            key="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src="https://a-us.storyblok.com/f/1020011/2000x1684/c7f1b3613e/scontent-cdninstagram-com-107631171711815140.jpg/m/2048x0/filters:format(webp):quality(80)"
              alt="Visual"
              className="w-full h-screen object-cover"
            />
          </motion.div>
        )}
          <ExpandingCards/>
      </AnimatePresence>
    
    </section>
  );
}
