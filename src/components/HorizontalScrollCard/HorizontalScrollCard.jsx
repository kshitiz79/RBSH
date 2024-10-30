import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import "./style.css";

// Register the ScrollToPlugin with GSAP
gsap.registerPlugin(ScrollToPlugin);

const HorizontalScrollCard = () => {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate to handle navigation

  // Define an array of colors to use on hover
  const colors = [
    "bg-[#ff635f]",
    "bg-[#f0c21f]",
    "bg-[#ffd766]",
    "bg-[#2b9e44]",
    "bg-[#46cc5f]",
    "bg-[#4384f2]",
    "bg-[#8eb9fd]",
  ];

  // State to manage the currently hovered card and color indices for each card
  const [hoveredCard, setHoveredCard] = useState(null);
  const [colorIndices, setColorIndices] = useState({});

  // Define paths corresponding to each card
  const paths = [
    "/branding-design",
    "/video-editing",
    "/lead-generation-seo",
    "/social-media-strategy",
    "/web-design-development",
    "/content-marketing-photography",
  ];

  // Refs for the buttons to control GSAP animations
  const buttonRefs = useRef([]);

  // Set initial position of buttons using GSAP
  useEffect(() => {
    buttonRefs.current.forEach((button) => {
      if (button) {
        gsap.set(button, { x: -200, opacity: 0 }); // Start off-screen to the left
      }
    });
  }, []);

  // Handle hover and scroll using GSAP
  const handleMouseEnter = (index) => {
    // Set the scroll position using GSAP
    gsap.to(scrollContainerRef.current, {
      scrollTo: {
        x: index * 400, // Adjusted scroll amount for smoother effect
      },
      duration: 1, // Set duration to control the scroll speed
      ease: "power4.out", // Smooth easing for scroll
    });

    // Update the color index for the hovered card
    setHoveredCard(index);
    setColorIndices((prevIndices) => {
      const newIndices = { ...prevIndices };
      // Initialize or increment the color index for the hovered card
      newIndices[index] =
        (newIndices[index] !== undefined ? newIndices[index] + 1 : 0) %
        colors.length;
      return newIndices;
    });

    // Animate the button into view
    if (buttonRefs.current[index]) {
      gsap.to(buttonRefs.current[index], {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredCard(null);

    // Animate the button out of view
    if (buttonRefs.current[index]) {
      gsap.to(buttonRefs.current[index], {
        x: -200,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  };

  // Handle click on the "View More" button to navigate to the corresponding path
  const handleViewMoreClick = (index) => {
    if (paths[index]) {
      navigate(paths[index]);
    }
  };

  // Dummy card data, can be expanded dynamically
  const cards = [
    {
      title: "Brand Strategy",
      description: "We create distinctive brand identities with digital and print design.",
    },
    {
      title: "Video Production",
      description: "We turn raw footage into captivating visuals.",
    },
    { title: "Lead Optimization",
      description: "Drive leads and rank higher with focused SEO strategies",
      },
    {
      title: "Social Management",
      description: "Boost your brand with smart social media strategies.",
    },
    {
      title: "Web Development",
      description: "Crafting seamless web experiences with expert design and development.",

    },
    {
      title: "Creative Photography",
      description: "Inspire and captivate with exceptional content and photography.",

    },
    // Add more cards as needed
  ];

  return (
    <div className="bg-gray-100">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto items-center h-full scrollbar-hide relative bg-white"
        style={{ scrollBehavior: "smooth" }}
      >
        {cards.map((card, index) => (
          <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          className={`min-w-[300px] w-[425px] h-[44rem] flex-shrink-0 rounded-lg  
                flex flex-col justify-center items-center   scroll-smooth
                ${
                  hoveredCard === index
                    ? colors[colorIndices[index] || 0]
                    : "bg-transparent"
                } 
                transition-colors duration-100 ease-in-out relative`}
        >
          <h2
            className={`text-4xl font-lato font-bold uppercase text-center ${
              hoveredCard === index ? "text-white" : "text-zinc-400"
            }`}
            style={{ lineHeight: "1.5", height: "auto", paddingTop: "20px", paddingBottom: "20px" }}
          >
            {card.title.split(" ")[0]} <br/> {card.title.split(" ")[1]}   <br/> {card.title.split(" ")[2] || ""}
          </h2>

          <p
     ref={(el) => (buttonRefs.current[index] = el)}
     onClick={() => handleViewMoreClick(index)}
          className={`text-pretty font-lato text-center uppercase px-10 ${  hoveredCard === index ? "text-white" : "text-white"}` }> {card.description}</p>

          <div className="mt-2 text-center h-20 flex flex-col items-center justify-center">

            <button
              ref={(el) => (buttonRefs.current[index] = el)}
              onClick={() => handleViewMoreClick(index)}
              className="w-16 h-16 bg-white rounded-full mt-36 text-black absolute flex items-center justify-center"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Right-pointing thin arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-right"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
