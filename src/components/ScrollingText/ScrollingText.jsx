import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollingText = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  // Initial small text array
  const initialTextArray = [
    "Partner With Us For Innovative Strategies And Standout Campaigns",
  ];

  // Repeat the small array enough times to make it seem like 100 items
  const repeatFactor = Math.ceil(1000 / initialTextArray.length); // Calculate how many times we need to repeat
  const textArray = Array.from({ length: repeatFactor }, () => initialTextArray).flat();

  const totalItems = textArray.length; // Now the totalItems will be close to 100

  useEffect(() => {
    const element = textRef.current;

    // GSAP animation
    gsap.to(element, {
      xPercent: -100,
      repeat: -1,
      duration: totalItems * 0.03, // Adjust duration based on the total number of array items
      ease: "linear",
    });

    // Cleanup GSAP animation on component unmount
    return () => {
      gsap.killTweensOf(element);
    };
  }, [totalItems]);

  return (
    <div ref={containerRef} className="overflow-hidden relative w-full py-6 sm:py-8 md:py-10 lg:py-12 bg-black">
      {/* Scrolling Text */}
      <div
        ref={textRef}
        className="whitespace-nowrap flex text-white font-bold"
      >
        {/* Responsive Text Sizes */}
        {textArray.map((text, index) => (
          <span
            key={index}
            className="px-2 sm:px-4 md:px-6 lg:px-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {text}
          </span>
        ))}
      </div>

      {/* Left Gradient Overlay */}
      <div className="absolute top-0 left-0 h-full 
                      w-1/6 sm:w-1/8 md:w-1/6 lg:w-6/12 
                      bg-gradient-to-r from-black to-transparent 
                      pointer-events-none"></div>

      {/* Right Gradient Overlay */}
      <div className="absolute top-0 right-0 h-full 
                      w-1/6 sm:w-1/8 md:w-1/6 lg:w-6/12 
                      bg-gradient-to-l from-black to-transparent 
                      pointer-events-none"></div>
    </div>
  );
};

export default ScrollingText;
