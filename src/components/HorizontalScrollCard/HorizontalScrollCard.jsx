import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import './style.css';

// Register the ScrollToPlugin with GSAP
gsap.registerPlugin(ScrollToPlugin);

const HorizontalScrollCard = () => {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate to handle navigation

  // Define an array of colors to use on hover
  const colors = [
    'bg-[#ea4335]',
    'bg-[#ff635f]',
    'bg-[#f0c21f]',
    'bg-[#ffd766]',
    'bg-[#2b9e44]',
    'bg-[#46cc5f]',
    'bg-[#4384f2]',
    'bg-[#8eb9fd]'
  ];
  

  // State to manage the currently hovered card and color indices for each card
  const [hoveredCard, setHoveredCard] = useState(null);
  const [colorIndices, setColorIndices] = useState({});

  // Define paths corresponding to each card
  const paths = [
    '/branding-design',
    '/video-editing',
    '/lead-generation-seo',
    '/social-media-strategy',
    '/web-design-development',
    '/content-marketing-photography',
  ];

  // Handle hover and scroll using GSAP
  const handleMouseEnter = (index) => {
    // Set the scroll position using GSAP
    gsap.to(scrollContainerRef.current, {
      scrollTo: {
        x: index * 400, // Adjusted scroll amount for smoother effect
      },
      duration: 1, // Set duration to control the scroll speed
      ease: 'power2.out', // Smooth easing for scroll
    });

    // Update the color index for the hovered card
    setHoveredCard(index);
    setColorIndices((prevIndices) => {
      const newIndices = { ...prevIndices };
      // Initialize or increment the color index for the hovered card
      newIndices[index] = (newIndices[index] !== undefined ? newIndices[index] + 1 : 0) % colors.length;
      return newIndices;
    });
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  // Handle click on the "View More" button to navigate to the corresponding path
  const handleViewMoreClick = (index) => {
    if (paths[index]) {
      navigate(paths[index]);
    }
  };

  // Dummy card data, can be expanded dynamically
  const cards = [
    { title: 'Branding and Design', description: 'We optimize People, Processes' },
    { title: 'Video Editing', description: 'Drive results through strategic ad placement.' },
    { title: 'Lead Generation', description: 'Insightful research solutions.' },
    { title: 'Social Media', description: 'High-quality ad films and rapid video content.' },
    { title: 'Web Design', description: 'High-quality ad films and rapid video content.' },
    { title: 'Photography', description: 'High-quality ad films and rapid video content.' },
    // Add more cards as needed
  ];

  return (
    <div className="bg-gray-100 ">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto items-center h-full scrollbar-hide relative bg-white"
        style={{ scrollBehavior: 'smooth' }}
      >
        {cards.map((card, index) => (
          <div
        
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`min-w-[300px] w-[425px] h-[44rem] flex-shrink-0 rounded-lg  
            flex flex-col justify-center items-center  
            ${hoveredCard === index ? colors[colorIndices[index] || 0] : 'bg-transparent'} 
            transition-colors duration-100 ease-in-out`}
          >
            <h2 className={`text-3xl font-bold ${hoveredCard === index ? 'text-white' : 'text-gray-700'}`}>
              {card.title}
            </h2>
            <div className="mt-2 text-center h-20 flex flex-col items-center justify-center ">
              <p
                className={`text-white ${hoveredCard === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
              >
                {card.description}
              </p>
              <button
                onClick={() => handleViewMoreClick(index)}
                className={`mt-4 p-8 bg-white rounded-full text-black ${hoveredCard === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
              >
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
