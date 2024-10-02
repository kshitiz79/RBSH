import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import img1 from '/src/assets/1.png';
import img2 from '/src/assets/2.png';
import img3 from '/src/assets/3.png';
import img4 from '/src/assets/4.png';
import img5 from '/src/assets/5.png';
import img9 from '/src/assets/6.png';
import img7 from '/src/assets/7.png';
import img8 from '/src/assets/8.png';
import img6 from '/src/assets/9.png';
import img11 from '/src/assets/11.png';
import img12 from '/src/assets/12.png';
import img13 from '/src/assets/13.png';
import img14 from '/src/assets/14.png';
import img15 from '/src/assets/15.png';
import img16 from '/src/assets/16.png';
import img17 from '/src/assets/17.png';
import img18 from '/src/assets/18.png';
import img19 from '/src/assets/19.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
const images2 = [img19, img11, img12, img13, img14, img15, img16, img17, img18, img9];

const Gallery = () => {
  return (
    <div className="bg-black py-8 overflow-hidden relative">
      <div className="w-full space-y-4">
        {/* Rows with different scrolling directions */}
        <MovingRow images={images} direction="right" />
        <MovingRow images={images2} direction="left" />
      </div>
    </div>
  );
};

const MovingRow = ({ images, direction }) => {
  const rowRef = useRef(null);

  // Duplicate the images array multiple times outside of useEffect
  const totalImages = 100; // Number of times to duplicate images for smooth scrolling
  const duplicatedImages = Array(totalImages).fill(images).flat(); // Duplicate the images array multiple times

  useEffect(() => {
    const element = rowRef.current;
    const scrollWidth = element.scrollWidth; // Get the total scroll width

    // Set the initial position of the row based on the scrolling direction
    gsap.set(element, {
      x: direction === 'left' ? 6 : -scrollWidth,
    });

    gsap.to(element, {
      x: direction === 'left' ? -scrollWidth : scrollWidth,
      duration: 9500, // Adjust the duration for smoother or faster scrolling
      ease: 'none',
      repeat: -1, // Infinite loop for continuous scrolling
      modifiers: {
        x: gsap.utils.unitize((value) => parseFloat(value) % scrollWidth),
      },
    });
  }, [direction]);

  return (
    <div
      ref={rowRef}
      className="flex"
      style={{ minWidth: '100%', whiteSpace: 'nowrap' }}
    >
      {/* Use the large duplicated images array for continuous scrolling */}
      {duplicatedImages.map((image, index) => (
        <div
          key={index}
          className="flex-none"
          style={{
            flex: '0 0 auto',
            minWidth: '250px', // Adjust the width for mobile
            height: '40vh', // Adjust height for mobile to 40% of the viewport
            margin: '0 10px',
          }}
        >
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg" // Added rounded corners
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
