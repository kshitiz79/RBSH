"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpandingCards from "./ExpandingCards";

const words = ["GOOD", "IS", "THE", "NEW COOL"];

export default function AnimatedIntro() {
  const [stage, setStage] = useState("start"); 

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("center"), 2000), // Move to center after 2s
      setTimeout(() => setStage("image"), 5000), // Show image after 4s
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
            className="absolute inset-0 px-10 text-4xl font-bold tracking-widest flex flex-row items-center"
            initial={{ opacity: 1, justifyContent: "space-between" }}
            animate={{
              justifyContent: stage === "start" ? "space-between" : "center",
              gap: stage === "start" ? 0 : "0.5rem", // Small gap when centered
            }}
            exit={{ opacity: 0, y: -100 }}
            transition={{
              justifyContent: {
                type: "spring",
                stiffness: -3000, // Very low stiffness for slower, softer movement
                damping: 40, // High damping for minimal bounce
                duration: 40, // Longer duration for gradual effect
              },
              gap: {
                type: "spring",
                stiffness: 10,
                damping: 40,
                duration: 10,
              },
              opacity: { duration: 0.8 },
              y: { duration: 2.9 },
            }}
          >
            {words.map((word, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 90, damping: 40 }}
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
            <div className="z-[-50]">
              <ExpandingCards />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}