import React from 'react';
import img1 from '/src/assets/1.png';
import img2 from '/src/assets/2.png';
import img3 from '/src/assets/3.png';
import img4 from '/src/assets/4.png';
import img5 from '/src/assets/5.png';
import img6 from '/src/assets/6.png';
import img7 from '/src/assets/7.png';
import img8 from '/src/assets/8.png';
import img9 from '/src/assets/9.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Gallery = () => {
  return (
    <div className="bg-black py-8 overflow-hidden relative">
      <div className="w-full space-y-4">
        {/* Rows with different scrolling directions */}
        <MovingRow images={images} direction="right" />
        <MovingRow images={images} direction="left" />
      </div>
    </div>
  );
};

const MovingRow = ({ images, direction }) => {
  return (
    <div
      className={`flex ${direction === 'left' ? 'animate-scroll-reverse' : 'animate-scroll'}`}
      style={{ minWidth: '100%', whiteSpace: 'nowrap' }}
    >
      {/* Duplicate the images array for continuous scrolling */}
      {images.concat(images).map((image, index) => (
        <div
          key={index}
          className="flex-none overflow-hidden"
          style={{
            flex: '0 0 auto',
            minWidth: '300px',
            height: '325px',
            margin: '0 10px',
          }}
        >
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
