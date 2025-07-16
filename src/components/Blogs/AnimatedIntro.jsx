"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpandingCards from "./ExpandingCards";

export default function AnimatedIntro() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 2000); // Show image after 2s
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Image Section */}
      <AnimatePresence>
        {showImage && (
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
