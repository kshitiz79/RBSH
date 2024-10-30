import React from 'react';
import topImage from './../../../public/mobilebottombg.webp';  
import bottomImage from './../../../public/mobiletopbg.webp';  

const ImageComponent = () => {
  return (
    <div className="relative min-h-screen">
      {/* Top image, visible only on mobile */}
      <div className="relative sm:hidden">
        <img src="/mobiletopbg.webp" alt="Top Background" className="w-screen h-[35vh] object-cover" />
      </div>

      {/* Main content or other components */}
      <div className="flex justify-center items-center h-[40vh] sm:h-auto">
        <p className="text-xl text-center text-white">Main content here</p>
      </div>

      {/* Bottom image, visible only on mobile */}
      <div className="relative sm:hidden">
        <img src="/mobilebottombg.webp" alt="Bottom Background" className="w-screen h-[35vh] object-cover" />
      </div>
    </div>
  );
};

export default ImageComponent;
