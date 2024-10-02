import  { useState, useEffect, useRef } from 'react';

import hero from '../../../assets/icon/1.png'; 
import useAnimation from '../../../hooks/Animation/useAnimation';


const DefineUs = () => {

  const [rotation, setRotation] = useState(0);
  const iconContainerRef = useRef(null); // Reference to the container of the icon




  useEffect(() => {
    const handleMouseMove = (event) => {
      if (iconContainerRef.current) {
        const iconRect = iconContainerRef.current.getBoundingClientRect();
        const iconCenterX = iconRect.left + iconRect.width / 2;
        const iconCenterY = iconRect.top + iconRect.height / 2;

        const deltaX = event.clientX - iconCenterX;
        const deltaY = event.clientY - iconCenterY;
        const angle = Math.atan2(deltaY, deltaX);
        const degree = angle * (380 / Math.PI);

        setRotation(degree + 360);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useAnimation();
  

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 md:py-36 px-4 md:px-10 z-10 bg-slate-50 relative">
      {/* Left Section with Heading and Icon */}
      <article className="flex flex-col items-center md:items-start w-full md:w-1/2 mb-8 md:mb-0 z-10">
        {/* Heading */}
        <header>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 z-10 uppercase text-center md:text-left">
            <span className='font-light'>What</span> <br /> defines us
          </h2>
        </header>

        {/* Image inside a container */}
        <figure ref={iconContainerRef} className="relative w-32 h-32 md:w-48 md:h-48 z-20">
          <img
            src={hero}
            alt="Hero representing creativity and innovation"
            className="w-full h-full object-contain"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 0.1s linear',
              transformOrigin: 'center center',
            }}
          />
        </figure>
      </article>

      {/* Right Section with Text and Button */}
      <aside className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left w-full">
        {/* Subheading */}
        <h3    className="text-xl md:text-4xl font-semibold mb-7 z-20 animated-heading" style={{ lineHeight: "2.5rem" }}>
          We’re brand builders at heart, creators by <br />design, tech enthusiasts in practice, and integrated at our core.
        </h3>

        {/* Paragraph with GSAP floating effect */}
        <p

          
          className="text-gray-500 mb-6 z-20 text-base md:text-xl animated-para "
        >
          We’re on a mission to take the very best of Indian creative talent to the world. Driven by a ferocious hunger
          to create tangible impact for your business, we work with in-house specialists, industry partners, and
          technology leaders to push the boundaries of creativity and put your brand on the global stage.
        </p>

        {/* Button */}

      </aside>
    </section>
  );
};

export default DefineUs;
