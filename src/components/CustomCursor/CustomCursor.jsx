// src/components/CustomCursor.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './CustomCursor.css'; // Create a CSS file for cursor styles

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [color, setColor] = useState('rgba(0, 0, 0, 0.8)'); // Default color
  const colors = ['rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255, 0.8)', 'rgba(255, 255, 0, 0.8)', 'rgba(0, 0, 0, 0.8)']; // Red, Blue, Yellow, Black

  // Function to create a falling particle effect
  const createParticle = (x, y) => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.backgroundColor = color;
    document.body.appendChild(particle);

    // Animate the particle falling and fading out
    gsap.to(particle, {
      y: 50, // Fall distance
      opacity: 0,
      scale: 1,
      duration: 2,
      ease: 'power2.out',
      onComplete: () => {
        particle.remove();
      },
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update cursor position
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 });

      // Create a particle effect
      createParticle(e.clientX, e.clientY);
    };

    // Randomly change the cursor color every second
    const changeColor = () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
      cursorRef.current.style.backgroundColor = randomColor;
    };

    // Set event listeners
    window.addEventListener('mousemove', handleMouseMove);
    const colorChangeInterval = setInterval(changeColor, 1000);

    // Cleanup event listeners and intervals on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(colorChangeInterval);
    };
  }, [color, colors]);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;
