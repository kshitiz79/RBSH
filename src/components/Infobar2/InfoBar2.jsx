import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
  const textItems = [
    { label: 'ADDRESS', value: 'T3-236, Golden-I, Techzone IV, Greater Noida' },
    { label: 'PHONE', value: '+91 9876543210' },
    { label: 'EMAIL', value: 'info@rbshstudio.com' },
  ];

  // Create the scrolling items with labels and values
  const scrollingItems = textItems.map((item, index) => (
    <span key={`text-${index}`} className="text-xl flex items-center ml-4">
      <span className="text-yellow-500 font-bold">{item.label}:</span>
      <span className="text-white font-semibold ml-2">{item.value}</span>
      {index !== textItems.length - 1 && (
        <span className="text-yellow-500 "></span>
      )}
    </span>
  ));

  return (
    <div className="bg-black text-white py-6 overflow-hidden relative">
      <div
        ref={scrollRef}
        className="flex items-center space-x-4 whitespace-nowrap uppercase"
      >
        {/* Duplicate the scrolling items for seamless loop */}
        {Array(110).fill(scrollingItems)}
      </div>
    </div>
  );
};

export default InfoBar2;
