import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// If you're using ScrollTrigger in the future, you can keep this import
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Register GSAP plugins if needed

const InfoBar2 = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;
 
    // Ensure the element has loaded and has a width
    if (!element) return;

    const totalWidth = element.scrollWidth / 2; // Since we have two copies

    // GSAP animation for infinite scrolling
    gsap.to(element, {
      x: -totalWidth,
      duration: 1800, // Adjust duration to control speed
      ease: 'linear',
      repeat: -1, // Infinite loop
      modifiers: {
        x: gsap.utils.unitize((value) => parseFloat(value) % totalWidth),
      },
    });

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf(element);
    };
  }, []);

  // Define the text items
  const textItems = ['T3-236, Golden-I, Techzone IV, Greater Noida',];

  // Create the scrolling items with icons between them and after the last item
  const scrollingItems = textItems.map((item, index) => (
    <span key={`text-${index}`} className="text-xl flex items-center">
      <span className="font-semibold text-white">{item}</span>
      <p
  
        className=" text-yellow-500 ml-8 font-extrabold"
      > ADDRESS :</p>
    </span>
  ));

  return (
    <div className="bg-black text-white py-6 overflow-hidden relative">
      <div
        ref={scrollRef}
        className="flex items-center space-x-1 whitespace-nowrap uppercase"
      >
        {/* Duplicate the scrolling items for seamless loop */}
        {Array(110).fill(scrollingItems)}
        {/* {scrollingItems}
        {scrollingItems} */}
      </div>
    </div>
  );
};

export default InfoBar2;
