import { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import arrowImg from '../../../public/arrow.jpeg';

import { useRef } from "react";
import { gsap } from "gsap";


const Footer = () => {

    const textRef = useRef(null);
  const containerRef = useRef(null);

    const initialTextArray = [
    "Partner With Us For Innovative Strategies And Standout Campaigns",
  ];

  // Repeat the small array enough times to make it seem like 100 items
  const repeatFactor = Math.ceil(1000 / initialTextArray.length); // Calculate how many times we need to repeat
  const textArray = Array.from({ length: repeatFactor }, () => initialTextArray).flat();

  const totalItems = textArray.length; // Now the totalItems will be close to 100

  useEffect(() => {
    const element = textRef.current;

    // GSAP animation
    gsap.to(element, {
      xPercent: -100,
      repeat: -1,
      duration: totalItems * 0.03, // Adjust duration based on the total number of array items
      ease: "linear",
    });

    // Cleanup GSAP animation on component unmount
    return () => {
      gsap.killTweensOf(element);
    };
  }, [totalItems]);


  const words = [
    { text: "project", symbol: "→" },
    { text: "success", symbol: "→" },
    { text: "idea", symbol: "→" },
  ];

  const symbols = ["#", "@", "!", "&", "%", "$","{","*", "}"];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(words[0].text);
  const [scrambling, setScrambling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start scrambling
      setScrambling(true);

      let scrambleCount = 0;
      const scrambleInterval = setInterval(() => {
        setDisplayedText(() =>
          Array(words[index].text.length)
            .fill(0)
            .map(() => symbols[Math.floor(Math.random() * symbols.length)])
            .join("")
        );

        scrambleCount++;
        if (scrambleCount > 5) {
          clearInterval(scrambleInterval);
          const nextIndex = (index + 1) % words.length;
          setIndex(nextIndex);
          setDisplayedText(words[nextIndex].text);
          setScrambling(false);
        }
      }, 60);
    }, 1500); // Every 1.5 seconds

    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
    
     <section className="relative bg-[#e5e8ea] text-[#0a0f1c] px-2 md:pt-40 md:pb-32 py-4 md:py-0 z-20">
   <div className="px-4 md:px-4">
  <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[7rem] font-semibold leading-none md:leading-none">
    <span className="block tracking-tight">let’s discuss your</span>
    <span className="block">
      <span className="mr-2 sm:mr-4">next</span>
      <span className="inline-block align-middle transform translate-y-[-2px] text-xl sm:text-3xl md:text-6xl md:px-20">
        <img src={arrowImg} alt="arrow" className="w-8 sm:w-12 md:w-20 inline" />
      </span>
      <span className="ml-1 sm:ml-2">{displayedText}</span>
    </span>
  </h1>
  <div className="max-w-3xl sm:pt-20 px-2 sm:px-0 text-base sm:text-lg">
    <p>Big ambitions?</p>
    <p>We match the energy.</p>
    <br />
    <Link to={"/contactus"} className="">
    <button className="bg-black text-white px-6 sm:px-12 py-3 sm:py-4 rounded-md font-semibold">
      CONTACT US
    </button>
    </Link>
  </div>
</div>

      </section>

    <div ref={containerRef} className="overflow-hidden relative w-full py-6 sm:py-8 md:py-10 lg:py-12 bg-black z-10">
      {/* Scrolling Text */}
      <div
        ref={textRef}
        className="whitespace-nowrap flex text-white font-bold"
      >
        {/* Responsive Text Sizes */}
        {textArray.map((text, index) => (
          <span
            key={index}
            className="uppercase px-2 sm:px-4 md:px-6 lg:px-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {text}
          </span>
        ))}
      </div>

      {/* Left Gradient Overlay */}
      <div className="absolute top-0 left-0 h-full 
                      w-1/6 sm:w-1/8 md:w-1/6 lg:w-6/12 
                      bg-gradient-to-r from-black to-transparent 
                      pointer-events-none"></div>

      {/* Right Gradient Overlay */}
      <div className="absolute top-0 right-0 h-full 
                      w-1/6 sm:w-1/8 md:w-1/6 lg:w-6/12 
                      bg-gradient-to-l from-black to-transparent 
                      pointer-events-none"></div>
    </div>

      <footer className="z-20 bg-black text-white py-10 lg:py-16 relative">
        <div className="container  max-w-full px-4 md:px-0 lg:px-8 z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mt-16 lg:mt-28 text-center lg:text-left z-20">
            {/* Logo and Social Icons */}
            <div className="flex flex-col items-center lg:items-start">
              <img
                src="./logo2.png"
                alt="RBSH Studio Logo"
                className="mb-4 lg:w-full h-auto w-[15rem] -ml-16"
              />
              <div className="flex space-x-7 md:space-x-2 mt-4 mr-8 text-3xl  ">
                <a href="https://www.facebook.com/rbshstudio" target="_blank" rel="noopener noreferrer" title="Follow us on Facebook" className="text-gray-400 hover:text-white border rounded-full p-2">
                  <FaFacebookF />
                </a>
                <a href="https://www.linkedin.com/company/rbshstudio/" target="_blank" rel="noopener noreferrer" title="Connect with us on LinkedIn" className="text-gray-400 hover:text-white border rounded-full p-2">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/rbshstudio" target="_blank" rel="noopener noreferrer" title="Follow us on Instagram" className="text-gray-400 hover:text-white border rounded-full p-2 ">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@rbshstudio" target="_blank" rel="noopener noreferrer" title="Subscribe to our YouTube channel" className="text-gray-400 hover:text-white border rounded-full p-2">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Our Links */}
            <div className="z-10">
              <h5 className="text-lg font-semibold mb-4 z-10">Our Links</h5>
              <ul className="space-y-2 z-10">
                <li><Link to="/career" className="hover:text-yellow-500">Career</Link></li>
                <li><Link to="/about" className="hover:text-yellow-500">FAQ</Link></li>
                <li><Link to="/blog" className="hover:text-yellow-500">Blogs</Link></li>
              </ul>
            </div>

            {/* Find It Fast */}
            <div className="z-10">
              <h5 className="text-lg font-semibold mb-4 z-20">Find It Fast</h5>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-yellow-500 z-10">About Us</Link></li>
                <li><Link to="/service" className="hover:text-yellow-500">Services</Link></li>
                <li><Link to="/contactus" className="hover:text-yellow-500">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="z-10 md:max-w-full max-w-xs mx-auto items-center md:items-start">
              <a href="https://maps.app.goo.gl/uDgAc8vujYwuEMcu6" target="_blank">
                T3-236, Golden-I, Techzone IV, Greater Noida West, UP - 201306
              </a>
              <a href="mailto:info@rbshstudio.com" className="block hover:text-yellow-500 mt-5">
                info@rbshstudio.com
              </a>
              <a href="tel:+919204309173" className="block hover:text-yellow-500 mt-5">
                +91 92043 09173
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 border-t border-gray-700 pt-8 text-center z-10">
            <p className="text-gray-400">© 2025 Copyright rbshstudio. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
