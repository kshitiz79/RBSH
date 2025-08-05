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
  
  );
};

export default ScrollingText;
