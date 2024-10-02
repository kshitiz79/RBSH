import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const Technology = () => {
  const slides = [
    {
      id: 1,
      title: "Node.js",
      content: "Building & deploying web apps, APIs, and software solutions.",
      logo: "./technology1.png", // Replace with the actual logo path or URL
    },
    {
      id: 2,
      title: "React.js",
      content: "Complete e-commerce solutions to meet your business goals.",
      logo: "./technology2.png",
    },
    {
      id: 3,
      title: "Adobe Creative Cloud",
      content: "Leverage the power of Google Ads to scale your business.",
      logo: "./logo2.png",
    },
    {
      id: 4,
      title: "Google Trends",
      content: "Design and integrate business architecture for transformation.",
      logo:  "./technology4.png",
    },
    {
      id: 5,
      title: "Next.js",
      content: "Cloud computing solutions to drive digital transformation.",
      logo:  "./technology3.png",
    },
    {
      id: 6,
      title: "Google Analytics",
      content: "Cloud computing solutions to drive digital transformation.",
      logo:  "./technology5.png",
    },
   {
    id: 6,
    title: "Facebook Business",
    content: "Cloud computing solutions to drive digital transformation.",
    logo: "./logo2.png",
  },
  {
    id: 6,
    title: "Facebook Analytics",
    content: "Cloud computing solutions to drive digital transformation.",
    logo: "./logo2.png",
  },

  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust as needed
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
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex flex-col justify-start items-center h-full w-full relative p-4"
          >
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
              <img
                src={slide.logo}
                alt={slide.title}
                className="mb-4 mx-auto h-16 w-auto  "
              />
              <h2 className="text-xl font-semibold mb-2">{slide.title}</h2>
              <p className="text-gray-700">{slide.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Technology;
