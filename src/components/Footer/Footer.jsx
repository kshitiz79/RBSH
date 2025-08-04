import { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import arrowImg from '../../../public/arrow.jpeg';


const Footer = () => {
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
     <section className="relative bg-[#e5e8ea] text-[#0a0f1c] px-6 pt-40 pb-32 z-20">
        <div className="">
          <h1 className="text-4xl md:text-[9rem] font-semibold md:leading-none">
            <span className="block">let’s discuss your</span>
            <span className="block">
              <span className="mr-4">next</span>
              <span className="inline-block transform translate-y-[-2px] text-4xl md:text-6xl px-28">
              <img src={arrowImg} alt="arrow" className="w-20" />
              </span>
              <span className="ml-4">{displayedText}</span>
            </span>
          </h1>
          <div className="max-w-3xl mx-auto pt-20 mr-10 text-lg">
          <p>Big ambitions?</p>
          <p>We match the energy.</p>
          <br />
          <button className="bg-black text-white px-12 py-4 rounded-md font-semibold ">CONTACT US</button>
          </div>
        </div>
      </section>

      <footer className="z-20 bg-black text-white py-10 lg:py-16 relative">
        <div className="container mx-auto px-4 lg:px-24 z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mt-16 lg:mt-28 text-center lg:text-left z-20">
            {/* Logo and Social Icons */}
            <div className="flex flex-col items-center lg:items-start">
              <img
                src="./logo2.png"
                alt="RBSH Studio Logo"
                className="mb-4 lg:w-[30rem] h-[5rem] w-[15rem] -ml-9"
              />
              <div className="flex space-x-7 md:space-x-9 mt-4 mr-8">
                <a href="https://www.facebook.com/rbshstudio" target="_blank" rel="noopener noreferrer" title="Follow us on Facebook" className="text-gray-400 hover:text-white">
                  <FaFacebookF />
                </a>
                <a href="https://www.linkedin.com/company/rbshstudio/" target="_blank" rel="noopener noreferrer" title="Connect with us on LinkedIn" className="text-gray-400 hover:text-white">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/rbshstudio" target="_blank" rel="noopener noreferrer" title="Follow us on Instagram" className="text-gray-400 hover:text-white">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@rbshstudio" target="_blank" rel="noopener noreferrer" title="Subscribe to our YouTube channel" className="text-gray-400 hover:text-white">
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
                <li><Link to="/branding-design" className="hover:text-yellow-500">Services</Link></li>
                <li><Link to="/contactus" className="hover:text-yellow-500">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="z-10">
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
