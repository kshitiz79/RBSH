import React, { useState, useEffect, memo, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import mobileBottomBg from './../../../../public/mobilebottombg.webp';
import mobileTopBg from './../../../../public/mobiletopbg.png';

const Hero = () => {
  const words = useMemo(
    () => [
      { word: 'clean', symbols: { left: '#', right: '#' } },
      { word: 'quality', symbols: { left: '@', right: '@' } },
      { word: 'creative', symbols: { left: '$', right: '$' } },
    ],
    []
  );

  const keywords = [
    "creative design solutions", "React website development", "digital marketing Noida", 
    "branding and marketing agency", "web development company NCR", "GSAP animations services",
    "top creative studio India", "website redesign services", "custom website solutions",
    "best digital marketing firm Noida ",
    // ... (Include all 1000 keywords here)
  ];

  // Chunk large keywords array for smaller meta tags
  const chunkedKeywords = (arr, size) => 
    arr.length > size ? arr.slice(0, size) : arr;



  const colors = useMemo(() => ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500'], []);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Change word every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  const backgroundStyle1 = useMemo(() => ({
    backgroundImage: `url('./background.webp')`,
    width: '100%',
    height: '100%',
    aspectRatio: '16 / 9',
  }), []);

  const backgroundStyle2 = useMemo(() => ({
    backgroundImage: `url('./image1.webp')`,
    width: '100%',
    height: '100%',
    aspectRatio: '16 / 9',
  }), []);

  useEffect(() => {
    // Optimized background scrolling effect using requestAnimationFrame
    const scrollingBg = document.querySelectorAll('.scrolling-bg');
    const animate = () => {
      scrollingBg.forEach(bg => {
        bg.style.backgroundPosition = `${parseFloat(bg.style.backgroundPosition || '0') - 0.01}% 0`;
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    
    <>
      <Helmet>
        {/* Preload critical background images to improve LCP */}
        <link rel="preload" as="image" href="./background.webp" />
        <link rel="preload" as="image" href="./image1.webp" />
        <link rel="preload" as="image" href={mobileBottomBg} />
        <link rel="preload" as="image" href={mobileTopBg} />

      </Helmet>
      <Helmet>
        {/* Add Primary Keywords */}
        <meta name="keywords" content={chunkedKeywords(keywords, 150).join(", ")} />
        <meta name="description" content="Transform your brand with RBSH Studio's creative design solutions, React development, and advanced media services." />
        <title>RBSH Studio | Creative Design, Branding, and Web Development</title>
      </Helmet>

      {/* Top image, visible only on mobile */}
      <div className="relative sm:hidden h-[31vh] bg-repeat-x bg-cover scrolling-bg" 
        style={{ backgroundImage: `url(${mobileBottomBg})` }}></div>

      <div className="relative lg:h-screen h-[45vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-fixed bg-no-repeat -z-1"
          style={backgroundStyle1}
          aria-hidden="true"
          loading="lazy"
        ></div>

        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat -z-40 overflow-hidden"
          style={backgroundStyle2}
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 flex flex-col justify-center items-center md:mb-96 mb-0 lg:mb-0 mt-28 lg:mt-0 md:mt-0">
          <h1 className="hero text-center font-black text-black mt-28 text-2xl sm:text-base md:text-lg lg:text-xl xl:text-5xl " 
          style={{ lineHeight: '1.2' }}>
            TRANSFORM <span className="font-medium uppercase">Your</span> BRAND <br />
            <span className="font-medium uppercase"> WITH </span> CREATIVITY <br />
            <span className="font-extrabold"> MEDIA</span> <span className="font-medium">&</span>{' '}
            <span className="font-extrabold"> TECHNOLOGY</span>
          </h1>

          <p className="text-center lg:mt-7 mt-5 font-roboto lg:text-lg lg:px-0 px-7" style={{ lineHeight: '2rem' }}>
            RBSH Studio delivers{' '}
            <span className="symbol">
              <span className="inline-block transition-all duration-500 ease-in-out">
                {words[currentWordIndex].symbols.left}
              </span>{' '}
              <span
                className={`font-bold inline-block transition-all duration-500 ease-in-out ${
                  colors[currentWordIndex % colors.length]
                }`}
                style={{ minWidth: '10px', textAlign: 'center' }}
              >
                {words[currentWordIndex].word}
              </span>{' '}
              <span className="inline-block transition-all duration-500 ease-in-out">
                {words[currentWordIndex].symbols.right}
              </span>
            </span>{' '}
            designs that <br /> bring your vision to life and set your brand apart.
          </p>

          <Link
            to="/contactus"
            className="inline-block border border-black px-8 py-2 sm:p-3 sm:px-12 md:px-16 lg:px-20 text-lg sm:text-xl lg:text-2xl md:mt-12 mt-6 rounded-full uppercase hover:text-white hover:bg-black transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom image, visible only on mobile */}
      <div className="relative sm:hidden h-[32vh] bg-repeat-x shadow-2xl bg-cover scrolling-bg" 
        style={{ backgroundImage: `url(${mobileTopBg})` }}></div>
    </>
  );
};

export default memo(Hero);