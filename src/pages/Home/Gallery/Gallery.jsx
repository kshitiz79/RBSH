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

const images = [img1, img2, img3, img4,img5,  img6,  img7,img8 ,img19, img11, img12, img13, img14, img15, img16, img17, img18, img9 ];
const images2 = [img19, img11, img12, img13, img14, img15, img16, img17, img18, img9  ];

const Gallery = () => {
  return (
    <div className="bg-black py-8 overflow-hidden relative">
      <div className="w-full space-y-4">

        <MovingRow images={images} direction="left" />
     
        <MovingRow images={images2} direction="left" />
      </div>
    </div>
  );
};

const MovingRow = ({ images, direction }) => {
  const rowRef = useRef(null);

  // Adjusted to 10 duplications for performance
  const totalImages = 10; 
  const duplicatedImages = Array(totalImages).fill(images).flat(); 

  useEffect(() => {
    const element = rowRef.current;
    const scrollWidth = element.scrollWidth;

    // Set the initial position based on direction
    gsap.set(element, {
      x: direction === 'left' ? 0 : -scrollWidth,
    });

   


    const animation = gsap.to(element, {
      x: direction === 'left' ? -scrollWidth : scrollWidth,
      duration: 700, // Adjust duration as needed
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((value) => parseFloat(value) % scrollWidth),
      },
    });

    
    // Cleanup on unmount
    return () => {

      animation.kill();
    };
  }, [direction, duplicatedImages]);

  return (
    <div
      ref={rowRef}
      className="flex"
      style={{ minWidth: '100%', whiteSpace: 'nowrap' }}
    >
      {duplicatedImages.map((image, index) => (
        <div
          key={index}
          className="flex-none"
          style={{
            flex: '0 0 auto',
            minWidth: '250px', 
            height: '40vh', 
            margin: '0 10px',
          }}
        >
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;