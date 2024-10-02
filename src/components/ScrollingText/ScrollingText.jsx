import  { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollingText = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  // Initial small text array
  const initialTextArray = ["Partner With Us For Innovative Strategies And Standout Campaigns",
   
  ];

  // Repeat the small array enough times to make it seem like 100 items
  const repeatFactor = Math.ceil(1000 / initialTextArray.length); // Calculate how many times we need to repeat
  const textArray = Array.from({ length: repeatFactor }, () => initialTextArray).flat();

  const totalItems = textArray.length; // Now the totalItems will be close to 100

  useEffect(() => {
    const element = textRef.current;
    const container = containerRef.current;

    const updateOpacity = () => {
      const containerWidth = container.offsetWidth;
      const leftBoundary = containerWidth * 0.13; // 10% from the left
      const rightBoundary = containerWidth * 0.87; // 10% from the right

      const spans = element.querySelectorAll("span");

      spans.forEach((span) => {
        const spanRect = span.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const spanLeft = spanRect.left - containerRect.left;
        const spanRight = spanRect.right - containerRect.left;

        // Calculate opacity based on proximity to boundaries
        if (spanLeft < leftBoundary) {
          const opacity = Math.max(0.7, spanLeft / leftBoundary); // Fade out towards the left
          span.style.opacity = opacity;
        } else if (spanRight > rightBoundary) {
          const opacity = Math.max(0.7, (containerWidth - spanRight) / (containerWidth - rightBoundary)); // Fade out towards the right
          span.style.opacity = opacity;
        } else {
          span.style.opacity = 1; 
        }
      });
      
    };

    // GSAP animation
    gsap.to(element, {
      xPercent: -100,
      repeat: -1,
      duration: totalItems * 0.03, // Adjust duration based on the total number of array items
      ease: "linear",
      onUpdate: updateOpacity, // Call updateOpacity on each animation frame
    });

    // Update opacity on resize as well
    window.addEventListener("resize", updateOpacity);

    return () => {
      window.removeEventListener("resize", updateOpacity);
    };
  }, [totalItems]);

  return (
    <div ref={containerRef} className="overflow-hidden relative w-full py-9 bg-black">
      <div
        ref={textRef}
        className="whitespace-nowrap flex text-white text-7xl font-bold"
      >
        {/* Looping through the array to create spans */}
        {textArray.map((text, index) => (
          <span key={index} className="px-4 ">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;
