import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Technology = () => {
  const slides = [
    {
      id: 1,
      title: "Node.js",
      content: "Building & deploying web apps, APIs, and software solutions.",
      logo: "./technology1.png",
    },
    {
      id: 2,
      title: "React.js",
      content: "Complete e-commerce solutions to meet your business goals.",
      logo: "./technology5.png",
    },
    {
      id: 3,
      title: "Adobe Creative Cloud",
      content: "Leverage the power of Google Ads to scale your business.",
      logo: "./technology12.png",
    },
    {
      id: 4,
      title: "Google Trends",
      content: "Design and integrate business architecture for transformation.",
      logo:  "./technology11.png",
    },
    {
      id: 5,
      title: "Next.js",
      content: "Cloud computing solutions to drive digital transformation.",
      logo:  "./technology9.png",
    },
    {
      id: 6,
      title: "Google Analytics",
      content: "Cloud computing solutions to drive digital transformation.",
      logo:  "./technology3.png",
    },
    {
      id: 7,
      title: "DaVinci",
      content: "Cloud computing solutions to drive digital transformation.",
      logo: "./technology2.png",
    },
    {
      id: 8,
      title: "Mall Chimp",
      content: "Cloud computing solutions to drive digital transformation.",
      logo: "./technology4.png",
    },
    {
      id: 9,
      title: "Hub Spot",
      content: "Cloud computing solutions to drive digital transformation.",
      logo: "./technology7.png",
    },
    {
      id: 10,
      title: "Canva",
      content: "Cloud computing solutions to drive digital transformation.",
      logo: "./technology10.png",
    },
    {
      id: 11,
      title: "Google Ads",
      content: "Cloud computing solutions to drive digital transformation.",
      logo: "./technology8.png",
    },
    {
      id: 12,
      title: "Facebook Analytics",
      content: "Cloud computing solutions to drive digital transformation.",
      logo: "./technology6.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-16 w-full text-center relative">
      <Slider {...settings}>
        {slides.map((slide) => {
          const [hasError, setHasError] = useState(false);
          const handleError = () => setHasError(true); // Set error state if image fails to load

          return (
            <div
              key={slide.id}
              className="flex flex-col justify-start items-center h-full w-full relative p-4"
            >
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                {!hasError ? (
                  <img
                    src={slide.logo}
                    alt={slide.title}
                    className="mb-4 mx-auto h-16 w-auto"
                    loading="lazy" // Lazy loading for better performance
                    onError={handleError} // Handle loading error
                  />
                ) : (
                  <div className="mb-4 mx-auto h-16 w-auto flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500">Image not available</span>
                  </div>
                )}
                <h2 className="text-xl font-semibold mb-2">{slide.title}</h2>
                <p className="text-gray-700">{slide.content}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Technology;
