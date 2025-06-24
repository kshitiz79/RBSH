import  { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Technology = () => {
  const slides = [
    {
      id: 1,
      title: "Node.js",
      content: "Fast JavaScript runtime for scalable web applications.",
      logo: "./technology1.webp",
    },
    {
      id: 2,
      title: "React.js",
      content: "Library for building dynamic user interfaces efficiently.",
      logo: "./technology5.webp",
    },
    {
      id: 3,
      title: "Adobe Creative Cloud",
      content: "Design and editing tools for creative professionals.",
      logo: "./technology12.webp",
    },
    {
      id: 4,
      title: "Google Trends",
      content: "Explore trending search topics and keyword insights.",
      logo: "./technology11.webp",
    },
    {
      id: 5,
      title: "Next.js",
      content: "React framework for server-side rendering and SEO.",
      logo: "./technology9.webp",
    },
    {
      id: 6,
      title: "Google Analytics",
      content: "Track and analyze website traffic and performance.",
      logo: "./technology3.webp",
    },
    {
      id: 7,
      title: "DaVinci Resolve",
      content: "Professional editing and color correction software.",
      logo: "./technology2.webp",
    },
    {
      id: 8,
      title: "Mailchimp",
      content: "Email marketing platform for campaigns and automation.",
      logo: "./technology4.webp",
    },
    {
      id: 9,
      title: "HubSpot",
      content: "CRM software for marketing, sales, and customer service.",
      logo: "./technology7.webp",
    },
    {
      id: 10,
      title: "Canva",
      content: "Online tool for designing graphics and presentations.",
      logo: "./technology10.webp",
    },
    {
      id: 11,
      title: "Google Ads",
      content: "Advertising platform to reach customers through search.",
      logo: "./technology8.webp",
    },
    {
      id: 12,
      title: "Facebook Analytics",
      content: "Insights into your audience and their interactions.",
      logo: "./technology6.webp",
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
    <section className="bg-white py-10 w-full text-center relative">
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
