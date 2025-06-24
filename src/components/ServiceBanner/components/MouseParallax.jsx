import { useRef } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

export const MouseParallax = ({ colors }) => {
  const containerRef = useRef(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configuration for smooth movement
  const springConfig = { damping: 90, stiffness: 300, mass: 0.6 };

  // Parallax layers (5 layers)
  const layers = [10, 20, 30, 40, 50];

  // Define rectangular dimensions for each card
  const cardDimensions = [
   
    
    { width: 610, height: 333 },
    { width: 540, height: 283 },
    { width: 470, height: 235 },
    { width: 395, height: 183 },
    { width: 325, height: 128 },
  ];

  // Use provided color scheme (array of 5 Tailwind CSS classes)
  const cardColors = colors;

  // Create motion values for each card
  const cards = layers.map((layer, index) => ({
    x: useSpring(
      useTransform(mouseX, [-150, 150], [-layer, layer]),
      springConfig
    ),
    y: useSpring(
      useTransform(mouseY, [-150, 150], [-layer, layer]),
      springConfig
    ),
    width: cardDimensions[index].width,
    height: cardDimensions[index].height,
    color: cardColors[index],
  }));

  // Mouse move event
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    mouseX.set(e.clientX - rect.left - centerX);
    mouseY.set(e.clientY - rect.top - centerY);
  };

  // Reset when mouse leaves
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-[40rem] h-[21rem] flex items-center justify-center rounded-lg overflow-hidden mb-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          style={{
            x: card.x,
            y: card.y,
            width: `${card.width}px`,
            height: `${card.height}px`,
            zIndex: index,
          }}
          className={`
            absolute
            ${card.color}
            flex
            items-center
            justify-center
            rounded-2xl
            shadow-lg
          `}
        >
          {/* Optional: add content inside each card */}
        </motion.div>
      ))}
    </div>
  );
};
