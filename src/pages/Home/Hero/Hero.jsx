import { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
const Hero = () => {
  // Static array of words with surrounding symbols
  const words = [
    { word: 'clean', symbols: { left: '', right: '' } },
    { word: 'captivating', symbols: { left: '', right: '' } },
    { word: 'creative', symbols: { left: '', right: '' } }
  ];

  // Corresponding colors for each word
  const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500'];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change word every 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden scroll-smooth">
      {/* Background image (Static and Fixed) */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-fixed bg-no-repeat -z-40"
        style={{ backgroundImage: `url('./background.png')` }}
      ></div>

      {/* Heading Text centered in the Hero Section */}
      <div className="fixed inset-0 flex flex-col justify-center items-center">
        <h1
          className="text-center font-black text-black mt-28 text-base sm:text-base md:text-lg lg:text-xl xl:text-5xl font-lato"
          style={{ lineHeight: '4rem' }}
        >
          TRANSFORM <span className="font-medium uppercase">Your</span> BRAND <br />
          <span className="font-medium uppercase"> WITH </span> CREATIVITY <br />
          <span className="font-extrabold"> MEDIA</span> <span className="font-medium">&</span>{' '}
          <span className="font-extrabold"> TECHNOLOGY</span>
        </h1>

        {/* Dynamic word with symbols */}
        <p className="text-center mt-7 font-mono text-lg" style={{ lineHeight: '2rem' }}>
          RBSH Studio delivers{' '}
          <span className="transition-all duration-500 ease-in-out symbol">
            {words[currentWordIndex].symbols.left} {/* Left Symbol */}
            <span className={`font-bold ${colors[currentWordIndex % colors.length]}`}>
              {words[currentWordIndex].word}
            </span> {/* Dynamic word with dynamic color */}
            {words[currentWordIndex].symbols.right}
          </span>{' '}
          designs that <br /> bring your vision to life and set your brand apart.
        </p>

        <button className="border mt-24 border-black p-3 px-20 text-2xl rounded-full uppercase hover:text-white hover:bg-black">
          <Link to="/contactus" >
          Contact Us
          </Link>
        </button>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat  -z-40 overflow-hidden"
        style={{ backgroundImage: `url('./image1.png')` }}
      ></div>
    </div>
  );
};

export default Hero;




